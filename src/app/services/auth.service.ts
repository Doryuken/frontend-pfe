import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
const url = 'http://localhost:1337/auth/local';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http : HttpClient,
              private router : Router) {}

  get url(){
    return url;
  }

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
  get role(){
    return localStorage.getItem('role');
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
      const removeToken = localStorage.removeItem('token');
      if (removeToken == null) {
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
         role: {
             id: number,
             name: string,
            // "description": "Default role given to authenticated user.",
            // "type": "authenticated"
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