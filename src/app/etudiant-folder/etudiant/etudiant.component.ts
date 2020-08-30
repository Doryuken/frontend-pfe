import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  
  public url = 'etudiants';
  data;
  message = 'Veuillez sélectionner un niveau précis  :';
  settings = {
    columns: {
      Nom: {
        title: 'Nom'
      },
    },
      

    noDataMessage : 'Aucune donnée trouvée',
    delete : {
      confirmDelete : true,
      
    },
    hideSubHeader : false,
    edit: {
      confirmSave: true,
    },
    actions : {
        position : 'right',
        add : false,
        edit : false,
        delete : false
              },
    pager : {
      display : true,
      perPage : 10

    }


  };

  constructor(
    private route : Router,
    private crud :  CrudService) {}
 
  ngOnInit(): void {
    this.getNiveau();
  }
  
  getNiveau()
  {
    this.crud.getMethod('niveaus')
    .subscribe(res => this.data = res);
  }  
  onSelect(id){
    this.route.navigate(['/CMS/niveau-etud',id]);
  }

}
