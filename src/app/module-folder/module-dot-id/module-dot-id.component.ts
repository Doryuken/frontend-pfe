import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-module-dot-id',
  templateUrl: './module-dot-id.component.html',
  styleUrls: ['./module-dot-id.component.scss']
})
export class ModuleDotIdComponent implements OnInit {
  id  = this.route.snapshot.paramMap.get('id');
  url : string = 'modules'; 
  message : string = "Informations sur le module : ";
  data;
  settings = {
    columns: {
      Nom: {
        title: 'Nom'
      },
      Prenom : {
        title: 'Prenom'
      },
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
    private toastrService : NbToastrService,
    private route : ActivatedRoute,
    private routeX : Router,
    private crud :  CrudService) {
      
    }
 
  showToast(status, message) {
      this.toastrService.show(status, message, { status });
    }

  ngOnInit(): void {
    this.getModule();
    this.getModuleEnseignants()
  }

  getModule(){
    this.crud.getOneMethod(this.url,this.id)
    .subscribe((res : moduleModel) => {
      this.message = this.message + res.Nom + ' - ' + res.niveau.Nom;
    },() => this.showToast('danger','Erreur du chargement, veuillez raffraichir la page.'));
  }
 
  getModuleEnseignants(){
    this.crud.getOneMethod(this.url,this.id)
    .subscribe((res : moduleModel) => this.data = res.enseignants);
  }

  goToEnseignant(id){
    this.routeX.navigate(['CMS/liste-enseignant',id]);
  }
 
}
 

interface moduleModel {
  id : number,
  Nom : string,
  enseignants : [
    {
       id: number,
       Nom : string,
       Prenom : string
    }
  ],
  niveau : {
    Nom : string
  }
}
