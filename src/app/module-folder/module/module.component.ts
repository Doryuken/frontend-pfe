import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  id = this.routeX.snapshot.paramMap.get('id');
  niveaux;
  ajoutModule : FormGroup = new FormGroup({
    nom : new FormControl('', [Validators.required, Validators.minLength(4)]),
  })
  public url = 'modules';
  data;
  message = 'Gérer les modules du niveau : ';
  settings = {
    columns: {
      Nom: {
        title: 'Nom',
      },
       
      },
 
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
    private routeX : ActivatedRoute,
    private toastrService : NbToastrService,
    private route : Router,
    private crud :  CrudService) {
      this.getName();
    }
 

  ngOnInit(): void {
    this.getModules();
  }

  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }
 
  getName(){
   this.crud.getOneMethod('niveaus',this.id)
   .subscribe((res : { Nom : string }) => this.message = this.message + res.Nom);
  }

  getModules(){
    this.crud.getMethod(`${this.url}?niveau.id=${this.id}`)
    .subscribe(response => {
       this.data = response;});
  }

  deleteModule(event){
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.deleteMethod(this.url,event.data.id)
      .subscribe(res =>  {
            this.showToast('success', 'Module supprimé avec succés !');
            this.ngOnInit()
          }, () => {
            this.showToast('warning', "Une erreur s'est produite, veuillez réessayer !");     
            this.ngOnInit();
          });
         
      event.confirm.resolve();
    }
      else 
      event.confirm.reject();
    }
  
  editModule(event){
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(
        res => 
        { 
          this.showToast('success', 'Module modifié avec succés !');
          this.ngOnInit() 
        }, 
        error => {
          this.showToast('warning', "Une erreur s'est produite, veuillez réessayer !");
          this.ngOnInit()
        });
      
      event.confirm.resolve();
    }
      else {
      event.confirm.reject();
    }
  }

  selectModule(id){
    this.route.navigate(['CMS/module',id]);
  }
  
  onSubmit(){
    const module = { Nom : this.ajoutModule.value.nom,
                     niveau : { id : this.id }
                   }
    console.log(module);
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.createMethod(this.url, module)
      .subscribe(() => {
        this.ajoutModule.reset('');
        this.showToast('success', `Le module a bien été créé !`);
        this.ngOnInit();

      }, () => {  this.showToast('warning', "Une erreur s'est produite, veuillez réessayer !"); });
  }
   
 
}
}

interface moduleModel {
  id : number,
  Nom : string,
  niveau : { Nom : string }
}