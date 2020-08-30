import { SeancesIdComponent } from './mode-enseignant/seances-id/seances-id.component';
import { MesEtudiantsComponent } from './mode-enseignant/mes-etudiants/mes-etudiants.component';
import { InformationsComponent } from './informations/informations.component';
import { MyProfileComponent } from './mode-enseignant/my-profile/my-profile.component';
import { MesModulesComponent } from './mode-enseignant/mes-modules/mes-modules.component';
import { MesGroupesComponent } from './mode-enseignant/mes-groupes/mes-groupes.component';
import { MesSeancesComponent } from './mode-enseignant/mes-seances/mes-seances.component';
import { RoleguardService } from './services/roleguard.service';
import { NiveauEtudComponent } from './etudiant-folder/niveau-etud/niveau-etud.component';
import { NiveauComponent } from './niveau/niveau.component';
import { ModuleDotIdComponent } from './module-folder/module-dot-id/module-dot-id.component';
import { EnseignantDotIdComponent } from './enseignant-folder/enseignant-dot-id/enseignant-dot-id.component';
import { AddEnseignantComponent } from './enseignant-folder/add-enseignant/add-enseignant.component';
import { ModuleComponent } from './module-folder/module/module.component';
import { EtudiantComponent } from './etudiant-folder/etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant-folder/enseignant/enseignant.component';

import { AuthguardService } from './services/authguard.service';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantguardService } from './services/enseignantguard.service';

const routes: Routes = [
  { path : 'CMS' , redirectTo : 'CMS/home', pathMatch: 'full' },
  {  
     path: 'CMS',
     component: MainComponent,
     canActivate : [AuthguardService],
     children : [
  { path: 'liste-enseignant', component: EnseignantComponent, canActivate : [RoleguardService]},
  { path: 'liste-enseignant/:id', component: EnseignantDotIdComponent, canActivate : [RoleguardService]},
  { path: 'ajouter-enseignant', component: AddEnseignantComponent, canActivate : [RoleguardService]},
  { path: 'etudiant', component: EtudiantComponent, canActivate : [RoleguardService]},
  { path: 'niveau-mod/:id', component: ModuleComponent, canActivate : [RoleguardService]},
  { path: 'niveau-etud/:id', component: NiveauEtudComponent, canActivate : [RoleguardService]},
  { path: 'module/:id', component: ModuleDotIdComponent, canActivate : [RoleguardService]},
  { path: 'niveau', component: NiveauComponent, canActivate : [RoleguardService]},
  { path: 'home', component: InformationsComponent},
  { path: 'module-grp/:id', component: MesGroupesComponent, canActivate : [EnseignantguardService]},
  { path: 'seances/:id', component: SeancesIdComponent, canActivate : [EnseignantguardService]},
  { path: 'groupe-etd/:id', component: MesEtudiantsComponent, canActivate : [EnseignantguardService]},
  { path: 'mes-seances', component: MesSeancesComponent, canActivate : [EnseignantguardService]},
  { path: 'mes-modules', component: MesModulesComponent, canActivate : [EnseignantguardService]},
  { path: 'my-profile', component: MyProfileComponent,  canActivate : [EnseignantguardService]},
        ]
  },

  { path : '' , component : LoginComponent },
  { path : '**' , redirectTo : '', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
