import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-mes-etudiants',
  templateUrl: './mes-etudiants.component.html',
  styleUrls: ['./mes-etudiants.component.scss']
})
export class MesEtudiantsComponent implements OnInit {
  url = 'etudiants';
  id = this.route.snapshot.paramMap.get('id');
  niveaux;
  data;
  data2;
  groupe : groupeModel;
  message = "Gérer les étudiants du groupe : ";

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
    actions : {
        position : 'right',
        add : false,
        edit : false,
        delete : false
              },
    pager : {
      display : true,
      perPage : 15 }
   };
  settings2 = {
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
      deleteButtonContent : 'Supprimer'
    },
    hideSubHeader : false,
    actions : {
        position : 'right',
        add : false,
        edit : false,
              },
    pager : {
      display : true,
      perPage : 15 }
   };

   constructor(
    private route : ActivatedRoute,
    private toastrService : NbToastrService,
    private crud : CrudService) { 
    
    }

  ngOnInit(): void {
    this.getNiveaux();
    this.getGroupeEtudiant();
  }

  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }

  getNiveaux(){
    this.crud.getMethod('niveaus')
    .subscribe(res => this.niveaux = res);
  }

  onClickCharger(selected){
    const idLvl = selected.value.selectedOption;
    this.crud.getMethod(`${this.url}?niveau.id=${idLvl}`)
    .subscribe(res => this.data = res, 
    () => {
      this.showToast('warning',"Erreur lors du chargement ...");
    });
  }

  selectEtudiant(id){
    this.groupe.etudiants.push(id)
    const ctx = this.groupe;
    this.crud.updateMethod('groupes',this.id,ctx)
    .subscribe(() => { this.showToast('success','Etudiant ajouté au groupe'); this.ngOnInit();},
    () => {
      this.showToast('warning','Erreur lors du chargement ...');
      this.ngOnInit();
    });
  }

  getGroupeEtudiant(){
    this.crud.getOneMethod('groupes',this.id)
    .subscribe((res : groupeModel) => { this.data2 = res.etudiants; this.groupe = res; this.message = this.message + res.Nom;  },
    () => this.showToast('warning','Erreur lors du chargement des étudiants du groupe'));
  }
  deleteEtudiant(event){
    const etudID = this.groupe.etudiants.indexOf(event.data);   
    this.groupe.etudiants.splice(etudID,1);
    const ctx = this.groupe;
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod('groupes',this.id, ctx)
      .subscribe(res => 
        { this.showToast('success', `L'étudiant a été retiré du groupe !`);
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

}

interface etudiantModel{
  id : number,
  Nom: string,
  Prenom: string,
  Matricule: string,
  BirthDate: string,
}

interface groupeModel{
  Nom : string,
  etudiants :  [etudiantModel] 
}