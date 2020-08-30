import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.scss']
})
export class NiveauComponent implements OnInit {
  ajoutNiveau : FormGroup = new FormGroup({
    nom : new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  public url = 'niveaus';
  data;
  message = 'Gérer les niveaux de votre département :';
  settings = {
    columns: {
      Nom: {
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
  
  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }

 constructor(
    private route : Router,
    private toastrService : NbToastrService,
    private crud :  CrudService) {}

  ngOnInit(): void {
    this.getNiveaux()
  }
 
  getNiveaux()
  {
    this.crud.getMethod(this.url)
    .subscribe(res => this.data = res);
  }
 
  onSubmit(){
    const niveau = { Nom : this.ajoutNiveau.value.nom };
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
    this.crud.createMethod(this.url, niveau)
    .subscribe(() => { this.showToast('success', "Le niveau a bien été créé !"); this.ngOnInit(); } ,
               () => { 
                 this.showToast('warning', "Une erreur s'est produite, veuillez réessayer ..");
                 this.ngOnInit(); 
                })
  }}

  deleteNiveau(event){
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.deleteMethod(this.url,event.data.id)
      .subscribe(res =>  {
            this.showToast('success', 'Niveau supprimé avec succés !');
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

  editNiveau(event){

    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(
        res => 
        { 
          this.showToast('success', 'Niveau modifié avec succés !');
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
  selectNiveau(id){
    this.route.navigate(['CMS/niveau-mod',id]);
  }
  
}
