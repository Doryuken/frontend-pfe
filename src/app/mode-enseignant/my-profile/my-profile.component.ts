import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  passForm = new FormGroup({
    new : new FormControl('',[Validators.required, Validators.minLength(7)]),
    confirm : new FormControl ('',[Validators.required, Validators.minLength(7)])
  })

  id = jwt_decode(localStorage.getItem('token')).id
  email = localStorage.getItem('email');
  created_at = localStorage.getItem('created_at');
  updated_at = localStorage.getItem('updated_at');
  
  nom = '';
  prenom = '';
  
  constructor( 
    private toastrService : NbToastrService,
    private crud : CrudService) { }

  ngOnInit(): void {
    this.getEnseignantInfo();
  }

  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }

  getEnseignantInfo(){
  this.crud.getMethod(`enseignants?user.id=${this.id}`)
  .subscribe((res : { Nom : string, Prenom : string}) => { this.nom = res[0].Nom, this.prenom = res[0].Prenom});
  }

  onSubmit(){
    const ctx = { password : this.passForm.value.new }; 
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
    this.crud.updateMethod('users','me',ctx)
    .subscribe(() => this.showToast('success', 'Mot de passe mit à jour')
    ,() => this.showToast('warning', 'Erreur, veuillez réessayer ..'))
   }}
}
