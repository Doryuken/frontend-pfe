import { CrudService } from 'src/app/services/crud.service';
import * as jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnseignantguardService implements CanActivate {
  constructor(    
    private crud: CrudService,
    private router: Router
  ) {}
  
    async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const token : { id : string } = jwt_decode(localStorage.getItem('token'));
    const userID = token.id; 
    if( await this.getInfo(userID) === 'Enseignant')
       return true;
    else 
       {
       window.alert("Accés refusé !");
       this.router.navigate(['CMS']);
       }
}
 
   getInfo(userID){
   return  this.crud.getOneMethod('users',userID)
  .toPromise().then((res : userModel ) =>  { return res.role.name });
}
 
}

interface userModel {

         id: number,
         username: string,
         email:  string,
         provider : string,
         confirmed: boolean,
         blocked : boolean,
         role : {
           name : string,
           id : number
         }
        }
