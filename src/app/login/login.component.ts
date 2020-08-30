import { HttpClient } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errmsg : boolean = false;
  constructor(private jwtServ : JwtService,
    private http : HttpClient,
    private auth : AuthService,
    private router : Router
    ) {}
   
     OnLogin(ctx){
       this.errmsg = false;
       this.auth.SeConnecter(ctx) 
      .subscribe(res => {
      localStorage.setItem('token', res.jwt);
      localStorage.setItem('email', res.user.email);
      localStorage.setItem('username', res.user.username); 
      localStorage.setItem('created_at', res.user.created_at); 
      localStorage.setItem('updated_at', res.user.updated_at); 
      this.router.navigate(['CMS/home']);
    },
    (error : Response) => {
      if(error.status === 400)
        this.errmsg = true;
    }
    );
    }
    
  ngOnInit(): void {
    if(this.auth.isloggedIn() && this.jwtServ.isTokenValid(localStorage.getItem('token')))
    this.router.navigate(['CMS/home']);
  }

}
