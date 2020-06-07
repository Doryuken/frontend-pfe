import { DepartementidComponent } from './departementid/departementid.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { GroupeComponent } from './groupe/groupe.component';
import { ModuleComponent } from './module/module.component';
import { NiveauComponent } from './niveau/niveau.component';
import { FormationComponent } from './formation/formation.component';
import { AuthguardService } from './services/authguard.service';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DeparetementComponent } from './deparetement/deparetement.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  
     path: 'CMS',
     component: MainComponent,
     canActivate : [AuthguardService],
     children : [
  { path: 'departement', component: DeparetementComponent },
  { path: 'departement/:id', component: DepartementidComponent },
  { path: 'formation', component : FormationComponent },
  { path: 'niveau', component : NiveauComponent },
  { path: 'module', component : ModuleComponent },
  { path: 'groupe', component : GroupeComponent },
  { path: 'enseignant', component : EnseignantComponent },
  { path: 'etudiant', component : EtudiantComponent },

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
