import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public api = 'http://localhost:1337'; 
   
  constructor(private http: HttpClient) { }

  getMethod(url){
   return this.http.get(`${this.api}${url}`).pipe(catchError(this.handleError));
  }
  getOneMethod(url,id){
    return this.http.get(`${this.api}${url}/${id}`).pipe(catchError(this.handleError));
  }

  countMethod(url){
    return this.http.get(`${this.api}${url}/count`).pipe(catchError(this.handleError));
  }

  createMethod(url,ctx){
    return this.http.post(`${this.api}${url}`,ctx).pipe(catchError(this.handleError));
  }

  deleteMethod(url, id : number){
    return this.http.delete(`${this.api}${url}/${id}`).pipe(catchError(this.handleError));
  }
  updateMethod(url, id : number,ctx){
    return this.http.put(`${this.api}${url}/${id}`,ctx).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  } 
}
