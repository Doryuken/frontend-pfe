import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CrudService } from 'src/app/services/crud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-niveau-etud',
  templateUrl: './niveau-etud.component.html',
  styleUrls: ['./niveau-etud.component.scss']
})
export class NiveauEtudComponent implements OnInit {
  id = this.routeX.snapshot.paramMap.get('id');

  ajoutEtudiant : FormGroup = new FormGroup({
    nom : new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+')]),
    prenom : new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+')]),
    matricule : new FormControl('', [Validators.required,Validators.pattern('[0-9]+')]),
    birthdate : new FormControl('', [Validators.required]),
  })
  public url = 'etudiants';
  data;
  message = 'Gérer les étudiants du niveau : ';
  settings = {
    columns: {
      Matricule : {
        title: 'Matricule',
      },
      Nom: {
        title: 'Nom',
      },
      Prenom: {
        title: 'Prenom',
      },
      BirthDate : {
        title: 'Date de naissance',
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
    this.getEtudiants();
  }
  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }
 
  getName(){
    this.crud.getOneMethod('niveaus',this.id)
    .subscribe((res : { Nom : string}) => this.message = this.message + res.Nom);
  }

  getEtudiants(){
    this.crud.getMethod(`${this.url}?niveau.id=${this.id}`)
    .subscribe(res => this.data = res,
     ()=> this.showToast('warning', `Une erreur s'est produite lors du chargement de la page ..`));
  }

  deleteEtudiant(event){
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.deleteMethod(this.url,event.data.id)
      .subscribe(res =>  {
            this.showToast('success', 'Etudiant supprimé avec succés !');
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

  editEtudiant(event){
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(
        res => 
        { 
          this.showToast('success', 'Etudiant modifié avec succés !');
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
  onSubmit(){
    
    const etudiant = { Nom : this.ajoutEtudiant.value.nom,
                       Prenom : this.ajoutEtudiant.value.prenom,
                       Matricule : this.ajoutEtudiant.value.matricule,
                       BirthDate : this.ajoutEtudiant.value.birthdate,
                       niveau  : { id : this.id },
                      }
                    
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.createMethod(this.url, etudiant)
      .subscribe(() => {
        this.ajoutEtudiant.reset('');
        this.showToast('success', `L'Etudiant a bien été créé !`);
        this.ngOnInit();

      }, (err : Response) => {
         this.showToast('warning', "Une erreur s'est produite ou Matricule déjà utilisé, veuillez réessayer ! "); 
        });
  }
}
}