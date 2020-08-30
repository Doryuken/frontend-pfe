import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  jwtToken: string;
  decodedToken: { [key: string]: string };

  constructor() {
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
    this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwt_decode(this.jwtToken);
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: string = this.getExpiryTime();
    const expiryTimeNumber : number = + expiryTime;
    if (expiryTime) {
      return ((1000 * expiryTimeNumber) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
  isTokenValid(token : string): boolean {
    this.setToken(token);
    if (this.jwtToken)
    { 
      const tokenToDecode : { id : string, exp : string, iat : string } =  jwt_decode(this.jwtToken);
      return (tokenToDecode.id === null ? false : true) && !this.isTokenExpired();
    }
    else return false;
  }
}



