import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbMenuItem} from '@nebular/theme';


@Component({
  selector: 'app-menu-ens',
  templateUrl: './menu-ens.component.html',
  styleUrls: ['./menu-ens.component.scss']
})
export class MenuEnsComponent implements OnInit {

  enseignant: NbMenuItem[] = [ 
        {
        title : 'Mon profil',
        icon: 'person-outline',
        link : 'my-profile', 
        },
        {
          title : 'Mes modules & groupes',
          icon: 'arrowhead-right-outline',
          link : 'mes-modules', 
          },
        {
        title : 'Mes seances',
        icon: 'arrowhead-right-outline',
        link : 'mes-seances', 
        },
     
       
  ]
    constructor (){ }

    ngOnInit(){}
}
