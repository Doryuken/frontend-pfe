import { AuthService } from './../services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import {NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items = [
    { title: 'Se déconnecter' },
  ];
  username : string;
  email : string;
  loading : boolean=true;
  url: string;

  constructor(
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

}
