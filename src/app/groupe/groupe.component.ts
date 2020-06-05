import { HttpClient } from '@angular/common/http';
import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';

 


@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {
  public url = 'http://localhost:1337/groupes';

  message = 'Gestion de la table groupe :';
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
 
  getGrs()
  {
      this.crud.getMethod(this.url)
      .subscribe(response  => {
         this.data = response; });
  }

  createGr(event)
  {
     this.crud.createMethod(this.url,event)
    .subscribe(res => { this.ngOnInit(); }, error => {
      this.inputName = '';
      this.ngOnInit();
    });
 
  }
  
  deleteGr(event)
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
  updateGr(event)
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
    this.getGrs();
  }

}

interface groupeModel{
  id : number,
  nom : string
}