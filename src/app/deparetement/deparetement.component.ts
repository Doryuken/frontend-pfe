import { FormationComponent } from './../formation/formation.component';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './../services/crud.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService, NbSelectComponent } from '@nebular/theme';


@Component({
  selector: 'app-deparetement',
  templateUrl: './deparetement.component.html',
  styleUrls: ['./deparetement.component.scss']
})
export class DeparetementComponent implements OnInit {
  public url = 'http://localhost:1337/departements';

  formationService = new FormationComponent(this.http,this.crud);
  dataFormations;
  deptFormations : departementModel;
  selectedForms;
  selectedDelForms;


  message = 'Gestion de la table departement :';
  data;

  inputName:string;

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      nom: {
        title: 'Nom'
      }},

    noDataMessage : 'Aucune donnée trouvée',
    delete : {
      confirmDelete : true,
      
    },
    hideSubHeader : false,
    edit: {
      confirmSave: true,
    },
    actions : {
        position : 'right',
        add : false
              },
    pager : {
      display : true,
      perPage : 10

    }


  };
 
  constructor(
    private dialogService: NbDialogService,
    private http : HttpClient,
    private crud :  CrudService) {}
  
  getFormations()
  {
    this.crud.getMethod(this.formationService.url).subscribe(
      res => { this.dataFormations = res 
      this.ngOnInit(); },
      error => this.ngOnInit());
  }


  getDepts()
  {
      this.crud.getMethod(this.url)
      .subscribe(response  => {
         this.data = response; });
  }

  createDept(event)
  {
     this.crud.createMethod(this.url,event)
    .subscribe(res => { this.ngOnInit(); }, error => {
      this.inputName = '';
      this.ngOnInit();
    });
 
  }
  
  deleteDept(event)
  {
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.deleteMethod(this.url,event.data.id)
      .subscribe(res => { this.ngOnInit(); }, error => {
        this.ngOnInit();
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
   
  }
  updateDept(event)
  {
    
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(res => { this.ngOnInit(); }, error => {
        event.confirm.resolve();
        this.ngOnInit();
      });
    } else {
      event.confirm.reject();
    }
  }
  
  ngOnInit(): void {
    this.getDepts();
  }

  

  

  onSelect(dialog: TemplateRef<any>,event) {
    
    this.deptFormations = event.data;
    this.getFormations()
    this.dialogService.open(dialog);

  }

  onClickAddPopUp(){
    if(this.selectedForms){
    this.selectedForms.forEach(select  => 
    this.deptFormations.formations.push({ id : select }));
    }
}

onClickDeletePopUp(){
  if(this.selectedDelForms){
  this.selectedDelForms.forEach(select => {
    let index = this.deptFormations.formations
     .findIndex( (element : {id : number}) =>  element.id == select.id);

     this.deptFormations.formations.splice(index,1); })
    }
    }
  

  onValider(){
    this.onClickDeletePopUp();
    this.onClickAddPopUp();

    this.crud.updateMethod(this.url,this.deptFormations.id,this.deptFormations)
    .subscribe(res => { this.ngOnInit(); }, error => {
      this.ngOnInit();
    });
  }
 
}

interface departementModel{
  id : number,
  nom : string,
  formations :  [
    { id : number }
  ] 
}

