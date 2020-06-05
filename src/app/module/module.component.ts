import { HttpClient } from '@angular/common/http';
import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';

 


@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  public url = 'http://localhost:1337/modules';

  message = 'Gestion de la table module :';
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
 
  getMods()
  {
      this.crud.getMethod(this.url)
      .subscribe(response  => {
         this.data = response; });
  }

  createMod(event)
  {
     this.crud.createMethod(this.url,event)
    .subscribe(res => { this.ngOnInit(); }, error => {
      this.inputName = '';
      this.ngOnInit();
    });
 
  }
  
  deleteMod(event)
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
  updateMod(event)
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
    this.getMods();
  }

}

interface moduleModel{
  id : number,
  nom : string
}