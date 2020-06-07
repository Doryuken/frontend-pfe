import { HttpClient } from '@angular/common/http';
import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.scss']
})
export class NiveauComponent implements OnInit {
  public url = '/niveaus';

  message = 'Gestion de la table niveau :';
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
 
  getnivs()
  {
      this.crud.getMethod(this.url)
      .subscribe(response  => {
         this.data = response; });
  }

  createniv(event)
  {
     this.crud.createMethod(this.url,event)
    .subscribe(res => { this.ngOnInit(); }, error => {
      this.inputName = '';
      this.ngOnInit();
    });
 
  }
  
  deleteniv(event)
  {
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.deleteMethod(this.url,event.data.id)
      .subscribe(res =>  this.ngOnInit() , error => this.ngOnInit());
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
   
  }
  updateniv(event)
  {
    
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(res =>  this.ngOnInit() , error => this.ngOnInit());
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  ngOnInit(): void {
    this.getnivs();
  }

}

interface niveauModel{
  id : number,
  nom : string
}
