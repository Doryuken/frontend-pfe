import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { appConfig } from './appConfig';


const url = appConfig.APIURL + 'auth/local';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor( 
              private http : HttpClient,
              private router : Router) {}
              
  
   SeConnecter(credentials)
  {
      return this.http.post<userModel>(url, credentials as logginModel)
      .pipe(catchError(this.handleError));
    
     
  }

  get username(){
    return localStorage.getItem('username');
  }
  get email(){
    return localStorage.getItem('email');
  }
  
  Inscription(credentials) {
    const api = `${url}/register`;
    return this.http.post(api, credentials as registerModel)
      .pipe(catchError(this.handleError));
  }

   isloggedIn() : boolean{
    const authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }
 
   
    logOut(){
      const clearStorage = localStorage.clear()
      
      if (!localStorage.length) {
        this.router.navigate(['']);
      }
    }

    get token()
    {
     return localStorage.getItem('token');
    }


  handleError(error: HttpErrorResponse) {
    return throwError(error);
  } 

}
interface userModel {
  jwt: string,
  user: {
         id: number,
         username: string,
         email:  string,
         provider : string,
         confirmed: boolean,
         blocked : boolean,
         created_at : string,
         updated_at : string,
         role : {
           name : string;
         }
        }
}
interface logginModel {
  identifier : string,
  password : string
}
interface registerModel {
  username : string,
  email : string,
  password : string
}