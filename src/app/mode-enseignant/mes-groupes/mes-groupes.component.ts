import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-mes-groupes',
  templateUrl: './mes-groupes.component.html',
  styleUrls: ['./mes-groupes.component.scss']
})
export class MesGroupesComponent implements OnInit {
  id = this.routeX.snapshot.paramMap.get('id');
  ajoutGroupe : FormGroup = new FormGroup({
    nom : new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  public url = 'groupes';
  data;
  message = 'Gérer les groupes de votre module : ';
  settings = {
    columns: {
      Nom: {
        title: 'Nom'
      }},
    noDataMessage : 'Aucune donnée trouvée',
    delete : {
      confirmDelete : true,
      deleteButtonContent : 'Supprimer'
      
    },
    hideSubHeader : false,
    edit: {
      confirmSave: true,
      editButtonContent : 'Modifier',
      saveButtonContent : 'Enregistrer',
      cancelButtonContent : 'Annuler',
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
    private routeX : ActivatedRoute,
    private route : Router,
    private toastrService : NbToastrService,
    private crud :  CrudService) {}

  ngOnInit(){
    this.getModuleName();
    this.getGroupes();   
  }
     getEnseignant(){
        const id = jwt_decode(localStorage.getItem('token')).id;
        return this.crud.getMethod(`enseignants?user.id=${id}`)
      }

  getGroupes()
  {
    this.getEnseignant()
    .subscribe( (res : { groupes : [] } ) => 
    {
      const groupes = res[0].groupes;       
      this.data = groupes.filter(e => e.module == this.id);
     }, () => this.showToast('warning','Erreur lors du chargement des groupes ...'));
  }
  
  getModuleName(){
    this.crud.getOneMethod('modules',this.id)
    .subscribe((res : {Nom : string})=>  this.message = this.message + res.Nom);
  }
 
  onSubmit(){
    this.getEnseignant().subscribe(( res : { id : number })   => { 
    const groupe = { Nom : this.ajoutGroupe.value.nom ,
                     module : { id : this.id },
                     enseignant : { id : res[0].id}};
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
    this.crud.createMethod(this.url, groupe)
    .subscribe(() => { this.ajoutGroupe.reset(''); this.showToast('success', "Le groupe a bien été créé !"); this.ngOnInit(); } ,
               () => { 
                 this.showToast('warning', "Une erreur s'est produite, veuillez réessayer ..");
                 this.ngOnInit(); 
                })
  }})
} 

  deleteGroupe(event){
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.deleteMethod(this.url,event.data.id)
      .subscribe(res =>  {
            this.showToast('success', 'Groupe supprimé avec succés !');
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

  editGroupe(event){

    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(
        res => 
        { 
          this.showToast('success', 'Groupe modifié avec succés !');
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
  selectGroupe(id){
    this.route.navigate(['CMS/groupe-etd',id]);
  }
}
