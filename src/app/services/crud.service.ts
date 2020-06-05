import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

 
  constructor(private http: HttpClient) { }

  getMethod(url){
   return this.http.get(url).pipe(catchError(this.handleError));
  }
  getOneMethod(url,id){
    return this.http.get(`${url}/${id}`).pipe(catchError(this.handleError));
  }

  countMethod(url){
    return this.http.get(`${url}/count`).pipe(catchError(this.handleError));
  }

  createMethod(url,ctx){
    return this.http.post(url,ctx).pipe(catchError(this.handleError));
  }

  deleteMethod(url, id : number){
    return this.http.delete(`${url}/${id}`).pipe(catchError(this.handleError));
  }
  updateMethod(url, id : number,ctx){
    return this.http.put(`${url}/${id}`,ctx).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  } 
}
