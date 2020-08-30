import { AuthService } from './../services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { NB_WINDOW, NbMenuService, NbThemeService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import {NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router} from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  token : { id : string } = jwt_decode(localStorage.getItem('token'));
  userID = this.token.id; 

  items = [
    { title: 'Se déconnecter' },
  ];
  username : string;
  email : string;
  loading : boolean=true;
  url: string;
  isAdmin : boolean = null;

  constructor(
    private themeService: NbThemeService,
    private crud: CrudService,
    private router : Router,
    private auth : AuthService,
    private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window
    ) {
      this.router.events.subscribe((event) => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }
  
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
             this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });

    }

  ngOnInit(): void {
    this.getInfo();
    this.username = this.auth.username;
    this.email = this.auth.email;
  
    this.nbMenuService.onItemClick()
    .pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    )
    .subscribe(title => {
      if(title ==='Se déconnecter')
       this.auth.logOut();
    });
  }

   async getInfo(){
    this.isAdmin = await  this.crud.getOneMethod('users',this.userID)
   .toPromise().then((res : { role : { name : string }} ) =>  { return res.role.name === 'Admin' });
 }

}
