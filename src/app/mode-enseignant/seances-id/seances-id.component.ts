import { ExcelService } from './../../services/excel.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-seances-id',
  templateUrl: './seances-id.component.html',
  styleUrls: ['./seances-id.component.scss']
})
export class SeancesIdComponent implements OnInit {
  ajoutSeance : FormGroup = new FormGroup ({
    matricule : new FormControl('',[Validators.required, Validators.pattern('[0-9]+')])
  })
  id = this.routeX.snapshot.paramMap.get('id');
  groupeEtudiant : groupeModel;
  public url = 'seances';
  data = null;
  seance;
  date = '';
  moduleName = '';
  groupeName = '';
  nbrPresence : number;
  message = 'Gérer les présences';
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
      deleteButtonContent : 'Supprimer'
      
    },
    hideSubHeader : false,
    edit: {
      confirmSave: true,
    },
    actions : {
        position : 'right',
        add : false,
        edit : false
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
    private excel : ExcelService,
    private routeX : ActivatedRoute,
    private toastrService : NbToastrService,
    private crud :  CrudService) {}

    ngOnInit(){
     this.getPresences();
    }
 
   getEtudiant(matricule){
     return this.crud.getMethod(`etudiants?Matricule=${matricule}`);
   }
   getPresences(){
     this.crud.getOneMethod(this.url,this.id)
     .subscribe(( res : seanceModel) => { this.data = res.etudiants; 
      this.date = res.Date; 
      this.moduleName =  res.module.Nom;
      this.groupeName = res.groupe.Nom; 
      this.seance = res; 
      this.nbrPresence = res.etudiants.length; 
      this.getGroupeEtudiants(res.groupe.id);
    }
     
     ,() => this.showToast('warning','Erreur lors du chargement de la liste des présences ...'));
   }

   getGroupeEtudiants(groupeID){
     this.crud.getOneMethod('groupes',groupeID)
     .subscribe((res : groupeModel) => this.groupeEtudiant = res);
   }

   deleteEtudiant(event){
     const etudID = this.seance.etudiants.indexOf(event.data);
     this.seance.etudiants.splice(etudID,1);
     const ctx = this.seance;
     if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
     this.crud.updateMethod(this.url,this.id,ctx)
     .subscribe(() => { 
       this.showToast('success', `Présence de ${event.data.Nom} ${event.data.Prenom} enlevée !`);
       this.ngOnInit(); }
       ,() => {this.showToast('warning', 'Erreur, veuillez réessayer ...'); this.ngOnInit() ;});
   } }

   onSubmit(){
    this.getEtudiant(this.ajoutSeance.value.matricule).subscribe(( res : [etudiantModel])  => {
      if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      (this.seance as seanceModel).etudiants.push(res[0]);
      this.crud.updateMethod(this.url,this.id, this.seance)
      .subscribe(() => { 
        this.showToast('success', `Présence ajoutée !`);
        this.ngOnInit(); },
        () => {this.showToast('warning', 'Erreur, veuillez réessayer ...'); this.ngOnInit() ;});}
    })
    
   }
   exportToExcel(){
    const data : seanceModel = this.seance.etudiants;
    this.excel.generateExcel(['Matricule','Nom','Prenom','Date de naissance'],
    data, this.seance.Date, this.seance.groupe.Nom, this.seance.module.Nom,this.groupeEtudiant.etudiants);
   }

  }

interface seanceModel {
    id: number,
    Date: string,
    enseignant: {
        id: number,
        Nom: string,
        Prenom: string,      
    },
    module: {
        id: number,
        Nom: string,
    },
    groupe: {
        id: number,
        Nom: string,
    },
    etudiants: [{
      Nom: string,
      Prenom: string,
      Matricule: number,
      BirthDate: string,
    }]

}
interface etudiantModel {
  id : string,
  Nom: string,
  Prenom: string,
  Matricule: number,
  BirthDate: string,
}
interface groupeModel {
  etudiants: [{
    id : number;
    Nom: string,
    Prenom: string,
    Matricule: number,
    BirthDate: string,
  }]
}