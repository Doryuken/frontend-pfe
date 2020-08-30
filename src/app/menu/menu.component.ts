import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss']
})

  export class MenuComponent implements OnInit {

  admin: NbMenuItem[] = [
    {  
      title: 'Gérer les enseignants',
      icon: 'settings-outline',
      expanded : true,
      children : [ 
        {
        title : 'Nos Enseignants',
        link : 'liste-enseignant', 
        icon: 'arrow-ios-forward-outline',
        },
        {
          title : 'Ajouter Enseignant', 
          link : 'ajouter-enseignant', 
          icon: 'arrow-ios-forward-outline',
          },

      ]},
    {  
      title: 'Gérer les formations',
      icon: 'settings-outline',
      expanded : true,
      children : [
        {
          title : 'Niveaux & Modules',
          link : 'niveau',
          icon: 'arrow-ios-forward-outline',
        },
        {
          title : 'Etudiants',
          link : 'etudiant',
          icon: 'arrow-ios-forward-outline',
        }
      ]
     
    },
   
    ]
    constructor (){ }

    ngOnInit(){}

}
