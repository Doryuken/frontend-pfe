import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './../services/crud.service';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  public url = '/formations';

  message = 'Gestion de la table formation :';

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
    private http : HttpClient,
    private crud :  CrudService) {}
  
   
  getForms()
  {
       this.crud.getMethod(this.url)
      .subscribe(response  => {
        this.data = response;});
  }

  createForm(event)
  {
     this.crud.createMethod(this.url,event)
    .subscribe(( res  : formationModel )=> { 
      this.ngOnInit(); }, error => {
      this.inputName = '';
      this.ngOnInit();
    });
  
  }
  
  deleteForm(event)
  {
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.deleteMethod(this.url,event.data.id)
      .subscribe(res => this.ngOnInit(), error => this.ngOnInit());
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
   
  }
  updateForm(event)
  {
    
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(res => this.ngOnInit(), error => this.ngOnInit());
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  ngOnInit(): void {
    this.getForms();
  }


}
interface formationModel{
  id : number,
  nom : string
}
