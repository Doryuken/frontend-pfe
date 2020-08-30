import { CrudService } from '../../services/crud.service';
import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  map, retry } from 'rxjs/operators';
@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.scss']
})
export class AddEnseignantComponent implements OnInit {
  public url = 'users';

  inscription = new FormGroup(
    {
      nom : new FormControl([],[Validators.required, Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+')]),
      prenom : new FormControl([],[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+')]),
      email : new FormControl([],[Validators.required,
      Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),
      username : new FormControl([],[Validators.required, Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]+')]),
      password : new FormControl([],[Validators.required, Validators.minLength(8)]),
    }
  );
  message = "Ajouter un enseignant :";

  constructor(
    private toastrService : NbToastrService,
    private crud : CrudService,
  ) {
    }

   
    
    onSubmit(){

    const account = {
    username: this.inscription.value.username,
    email: this.inscription.value.email,
    password: this.inscription.value.password,
  };
  if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
     this.crud.createMethod(this.url, account)
     .subscribe((res : { id : number}) => {  
     const enseignant = {
     Nom : this.inscription.value.nom,
     email: this.inscription.value.email,
     Prenom : this.inscription.value.prenom,
     user : { id : res.id }
     };

     this.crud.createMethod('enseignants', enseignant)
     .pipe(retry(3))
     .subscribe(() => {
       this.inscription.reset('');
       this.showToast('success', `Le compte enseignant a bien été créé !`);
      });
   }, (err : Response) => {
    if(err.status === 400)
    this.showToast('warning', `Nom d'utilisateur ou email déjà existant !`);
    else this.showToast('warning', `La création du compte n'a pas été faite! réessayer `);
   });
  }   
}


  
  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }
  
  ngOnInit(): void {
    
  }

}
