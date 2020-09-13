import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-enseignant-dot-id',
  templateUrl: './enseignant-dot-id.component.html',
  styleUrls: ['./enseignant-dot-id.component.scss']
})
export class EnseignantDotIdComponent implements OnInit {

  
  private url = 'enseignants';
  id = this.route.snapshot.paramMap.get('id');
  enseignant : enseignantModel;
  modules;
  data;
  message = "Gérer les modules de l'enseignant : ";

  settings = {
    columns: {
      Nom : {
        title: 'Nom'
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
        edit : false
              },
    pager : {
      display : true,
      perPage : 10 }
   };


 
  constructor(
    private routeX : Router,
    private toastrService : NbToastrService,
    private crud : CrudService,
    private route : ActivatedRoute) { 
      this.getName();
    }

  ngOnInit(): void {
  
    this.getInfo();
    this.getModules();

  }

  onClickAdd(form){ 
  let ensModules = this.data;
  ensModules.push(form.value.selectedOption);
  if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
  this.crud.updateMethod(this.url,this.id, { modules : ensModules })
  .subscribe(() => { 
    this.showToast('success', `Le module a bien été ajouté !`);
    this.ngOnInit();
     }, () => { this.showToast('warning', `Une erreur s'est produite, veuillez réessayer..`);
                this.ngOnInit();
     });
   }

  }

  getModules(){
    this.crud.getMethod('modules')
    .subscribe(res => this.modules = res, err => console.log(err));
  }

  getName() {
    this.crud.getMethod(`enseignants?id=${this.id}`)
    .subscribe(
        req => this.message = this.message + (req as {Nom:string})[0].Nom + " " +(req as {Prenom:string})[0].Prenom,
  
        err => console.log(err));
  }

  deleteModule(event){   
    let moduleID = this.enseignant.modules.indexOf(event.data.id);
    this.enseignant.modules.splice(moduleID, 1);
    let ctx = this.enseignant;
    
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,this.id, ctx)
      .subscribe(res => 
        { this.showToast('success', `Le module a bien été supprimé !`);
          this.ngOnInit();},
          error => {
             this.showToast('warning', `Une erreur s'est produite, veuillez réessayer..`);
             this.ngOnInit();
          })
      event.confirm.resolve();
    }
      else {
      event.confirm.reject();
    }
  }


  getInfo(){
    this.crud.getOneMethod(this.url,this.id)
    .subscribe( ( res : enseignantModel) => {
      this.data = res.modules;
      this.enseignant = res;
    }, error => {
      this.showToast('warning', `Une erreur s'est produite lors du chargement de la page ..`);
    });
  }
  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }
  
  selectModule(id){
    this.routeX.navigate(['CMS/module',id]);
  }
}

interface enseignantModel {
  id : number,
  Nom : string,
  modules : [{
    id : number,
    Nom : string
  }]
}