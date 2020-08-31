import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CrudService } from 'src/app/services/crud.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mes-modules',
  templateUrl: './mes-modules.component.html',
  styleUrls: ['./mes-modules.component.scss']
})
export class MesModulesComponent implements OnInit {
  tokenID = jwt_decode(localStorage.getItem('token')).id;
  url : string = 'modules'; 
  message : string = "Mes modules";
  data;
  settings = {
    columns: {
      Nom: {
        title: 'Nom'
      },
      niveau :{
        title: 'Niveau',
        valuePrepareFunction: (niveau) =>{ return niveau.Nom },
      }
    },

    noDataMessage : 'Aucune donnée trouvée',
    delete : {
      confirmDelete : true,
      deleteButtonContent : 'Supprimer'
    },
    hideSubHeader : false,
    actions : {
        position : 'right',
        add : false,
        edit : false,
        delete : false
              },
    pager : {
      display : true,
      perPage : 10 }
   };
  constructor(
              private route : Router,
              private toastrService : NbToastrService,    
              private crud :  CrudService) { }
              
 showToast(status, message) {
    this.toastrService.show(status, message, { status });
     }
  ngOnInit(): void {
    this.getModules();
  } 
  selectModule(id){
    this.route.navigate(['CMS/module-grp',id]);
  }
  getModules(){
    this.crud.getMethod(`${this.url}?enseignants.user.id=${this.tokenID}`)
    .subscribe(res => this.data = res, () => this.showToast('warning','Erreur lors du chargement ..'));
  }
}
