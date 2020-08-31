import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CrudService } from 'src/app/services/crud.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';


@Component({
  selector: 'app-mes-seances',
  templateUrl: './mes-seances.component.html',
  styleUrls: ['./mes-seances.component.scss']
})
export class MesSeancesComponent implements OnInit {
  filterSeances : FormGroup = new FormGroup({
    module : new FormControl('', Validators.required),
    groupe : new FormControl('', Validators.required)
  })
  id = jwt_decode(localStorage.getItem('token')).id;
  url = 'seances';
  modules;
  groupeSelected;
  groupes;
  data; 
 
  message = "Gérer mes séances";
  settings = {
    columns: {
      Code: {
        title: 'Code',
        width : '25%'
      },
      Date: {
        title: 'Date',
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
      perPage : 15 }
   };

   constructor(
    private excel : ExcelService,
    private route : Router,
    private toastrService : NbToastrService,
    private crud : CrudService) { 
    
    }

  ngOnInit(): void {
    this.getInfos();
  }

  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }
  
  getInfos(){
    this.crud.getMethod(`modules?enseignants.user=${this.id}`)
    .subscribe(res => this.modules = res, () => this.showToast('warning','Erreur lors du chargement des modules'));
  }

  refreshGroupe(event){
    this.crud.getMethod(`groupes?module.id=${event}`)
    .subscribe(res => this.groupes = res, () => this.showToast('warning','Erreur lors du chargement des groupes'));
  }

  onClickSelected(filter){
    const moduleID = filter.value.module;
    const groupeID = filter.value.groupe;
    this.groupeSelected = this.groupes[this.groupes.findIndex(elem => elem.id == groupeID)];
    this.crud.getMethod(`seances?module.id=${moduleID}&groupe.id=${groupeID}`)
    .subscribe(res => this.data = res, () => this.showToast('warning','Erreur lors du chargement des séances'))
  }
  selectSeance(id){
    this.route.navigate(['CMS/seances',id]);
  }

  exportToExcel(){
    this.excel.generateExcelAll(this.groupeSelected,this.data);
  }
}
