import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errmsg : boolean = false;
  constructor(
    private http : HttpClient,
    private auth : AuthService,
    private router : Router
    ) {}
   
   OnLogin(ctx){
    this.auth.SeConnecter(ctx) .subscribe(res => {
      localStorage.setItem('token', res.jwt);
      localStorage.setItem('email', res.user.email);
      localStorage.setItem('username', res.user.username);
      localStorage.setItem('role', res.user.role.name);
      this.router.navigate(['CMS']);
    },
    (error : Response) => {
      if(error.status === 400)
        this.errmsg = true;
    }
    );
    }
    
  ngOnInit(): void {
    if(this.auth.isloggedIn())
    this.router.navigate(['CMS']);
  }

}
