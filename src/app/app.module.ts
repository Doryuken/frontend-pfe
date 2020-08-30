import { JwtService } from './services/jwt.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbMenuModule,
  NbCardModule, NbInputModule, NbButtonModule, NbDialogModule,
   NbIconModule, NbUserModule, NbAlertModule, NbMenuService, NbContextMenuModule, NbSpinnerModule, NbSelectModule, NbToastrService, NbToastrModule, } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AuthconfigService } from './services/auth.interceptor';
import { EnseignantComponent } from './enseignant-folder/enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant-folder/etudiant/etudiant.component';
import { ModuleComponent } from './module-folder/module/module.component';
import { AddEnseignantComponent } from './enseignant-folder/add-enseignant/add-enseignant.component';
import { EnseignantDotIdComponent } from './enseignant-folder/enseignant-dot-id/enseignant-dot-id.component';
import { ModuleDotIdComponent } from './module-folder/module-dot-id/module-dot-id.component';
import { NiveauComponent } from './niveau/niveau.component';
import { NiveauEtudComponent } from './etudiant-folder/niveau-etud/niveau-etud.component';
import { MesGroupesComponent } from './mode-enseignant/mes-groupes/mes-groupes.component';
import { MesModulesComponent } from './mode-enseignant/mes-modules/mes-modules.component';
import { MesSeancesComponent } from './mode-enseignant/mes-seances/mes-seances.component';
import { MyProfileComponent } from './mode-enseignant/my-profile/my-profile.component';
import { InformationsComponent } from './informations/informations.component';
import { MenuEnsComponent } from './menu-ens/menu-ens.component';
import { MesEtudiantsComponent } from './mode-enseignant/mes-etudiants/mes-etudiants.component';
import { SeancesIdComponent } from './mode-enseignant/seances-id/seances-id.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    MainComponent,
    EnseignantComponent,
    EtudiantComponent,
    ModuleComponent,
    AddEnseignantComponent,
    EnseignantDotIdComponent,
    ModuleDotIdComponent,
    NiveauComponent,
    NiveauEtudComponent,
    MesGroupesComponent,
    MesModulesComponent,
    MesSeancesComponent,
    MyProfileComponent,
    InformationsComponent,
    MenuEnsComponent,
    MesEtudiantsComponent,
    SeancesIdComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    NbThemeModule.forRoot({ name: 'default' }),
    Ng2SmartTableModule,
    ReactiveFormsModule,
    NbToastrModule.forRoot(),
    ],
  providers: [
    JwtService,
    NbSidebarService,
    AuthService,
    NbMenuService,
    NbToastrService,
     {
       provide: HTTP_INTERCEPTORS,
       useClass: AuthconfigService,
       multi: true
     },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
