import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {


  constructor(
    private jwtServ : JwtService,
    private auth: AuthService,
    private router: Router
  ) {}
  
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isloggedIn() !== true || !this.jwtServ.isTokenValid(localStorage.getItem('token'))) {
      window.alert('Vous devez être connecté !');
      this.router.navigate(['']);
    }
    return true;
  }

}
