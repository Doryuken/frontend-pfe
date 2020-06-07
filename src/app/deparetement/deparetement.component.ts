import { Router } from '@angular/router';
import { FormationComponent } from './../formation/formation.component';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-deparetement',
  templateUrl: './deparetement.component.html',
  styleUrls: ['./deparetement.component.scss']
})
export class DeparetementComponent implements OnInit {
  public url = '/departements';

  deptFormations : departementModel;

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
    private route : Router,
    private crud :  CrudService) {}
  

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
      .subscribe(res =>  this.ngOnInit(), error =>  this.ngOnInit());
      event.confirm.resolve();
    }
      else {
      event.confirm.reject();
    }
   
  }
  updateDept(event)
  {
    
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(res =>  this.ngOnInit(), error => this.ngOnInit());
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  ngOnInit(): void {
    this.getDepts();
  }

  onSelect(id : number) {
    this.route.navigate(['CMS/departement',id]);
  } 
}

interface departementModel{
  id : number,
  nom : string,
  formations :  [
    { id : number }
  ] 
}

