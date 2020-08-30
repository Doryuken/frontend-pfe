import { appConfig } from './appConfig';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const api = appConfig.APIURL;

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
   
  constructor(private http: HttpClient) { }

  getMethod(url){
   return this.http.get(`${api}${url}`).pipe(catchError(this.handleError));
  }
  getOneMethod(url,id){
    return this.http.get(`${api}${url}/${id}`).pipe(catchError(this.handleError));
  }

  countMethod(url){
    return this.http.get(`${api}${url}/count`).pipe(catchError(this.handleError));
  }

  createMethod(url,ctx){
    return this.http.post(`${api}${url}`,ctx).pipe(catchError(this.handleError));
  }

  deleteMethod(url, id){
    return this.http.delete(`${api}${url}/${id}`).pipe(catchError(this.handleError));
  }
  updateMethod(url, id,ctx){
    return this.http.put(`${api}${url}/${id}`,ctx).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  } 
}
