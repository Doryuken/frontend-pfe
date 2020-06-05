import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  items: NbMenuItem[] = [
    { 
      title: 'Gestion des tables',
      icon: 'settings-outline',
      expanded : true,
      children : [
    {  
      title: 'Départements',
      icon: 'settings-outline',
      link : 'departement',
    },
    {
      title: 'Formations',
      icon: 'settings-outline',
      link : 'formation'
    },
  
    {
          title: 'Niveaux',
          icon: 'settings-outline',
          link : 'niveau'
     },
    {
          title: 'Modules',
          icon: 'settings-outline',
          link : 'module'
     },
    {
          title: 'Groupes',
          icon: 'settings-outline', 
          link : 'groupe'
    },
    {
         title: 'Enseignants',
         icon: 'settings-outline',
         link : 'enseignant'
    },
    {
         title: 'Etudiants',
         icon: 'settings-outline',
         link : 'etudiant'
    },
     ]}
    ];
}


