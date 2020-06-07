import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbMenuModule, 
  NbCardModule, NbInputModule, NbButtonModule, NbDialogModule,
   NbIconModule, NbUserModule, NbAlertModule, NbMenuService, NbContextMenuModule, NbSpinnerModule, NbSelectModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { DeparetementComponent } from './deparetement/deparetement.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AuthconfigService } from './auth.interceptor';
import { FormationComponent } from './formation/formation.component';
import { NiveauComponent } from './niveau/niveau.component';
import { ModuleComponent } from './module/module.component';
import { GroupeComponent } from './groupe/groupe.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DepartementidComponent } from './departementid/departementid.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DeparetementComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    FormationComponent,
    NiveauComponent,
    ModuleComponent,
    GroupeComponent,
    EnseignantComponent,
    EtudiantComponent,
    DepartementidComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    FormsModule,
    NbUserModule,
    NbSpinnerModule,
    NbSelectModule,
    NbContextMenuModule,
    HttpClientModule,
    NbAlertModule,
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbThemeModule.forRoot({ name: 'dark' }),
    Ng2SmartTableModule,
  ],
  providers: [
   
    NbSidebarService,
    AuthService,
    NbMenuService,
     {
       provide: HTTP_INTERCEPTORS,
       useClass: AuthconfigService,
       multi: true
     },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
