import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
  private url = 'enseignants';
  data : any = [];
 
  message = 'Gérer les enseignants de votre département :';

  settings = {
    columns: {
      Nom: {
        title: 'Nom'
      },
      Prenom: {
        title: 'Prenom'
      },
      email : {
        title : 'email',
        editable : false
      }
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
        add : false
              },
    pager : {
      display : true,
      perPage : 10 }
   };

  constructor(
    private toastrService : NbToastrService,
    private route : Router,
    private crud :  CrudService) {}
 
  ngOnInit(): void {
    this.getEnseignant();
    
  }

  getEnseignant()
  {
      this.crud.getMethod(this.url)
      .subscribe(response  => {
         this.data = response; });
  }

    deleteEnseignant(event){   

    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.deleteMethod(this.url,event.data.id)
      .subscribe(res =>  {
        this.crud.getMethod(`users?email=${event.data.email}`)
        .subscribe((res : userModel)=> {
          this.crud.deleteMethod('users', res[0].id)
          .pipe(retry(3))
          .subscribe(() => {
            this.ngOnInit()
            this.showToast('success', 'Enseignant supprimé avec succés !');
          }, 
          () => {
            this.showToast('warning', "Une erreur s'est produite veuillez réessayer..");     
            this.ngOnInit() 
          }
          )
        });
      });
      
      event.confirm.resolve();
    }
      else {
      event.confirm.reject();
    }
  }

  editEnseignant(event){
    if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
      this.crud.updateMethod(this.url,event.newData.id,event.newData)
      .subscribe(
        res => 
        { 
          this.showToast('success', 'Enseignant modifié avec succés !');
          this.ngOnInit() 
        }, 
        error => {
          this.showToast('warning', "Une erreur s'est produite veuillez réessayer ..");
          this.ngOnInit()
        });
      
      event.confirm.resolve();
    }
      else {
      event.confirm.reject();
    }
  }

  showToast(status, message) {
    this.toastrService.show(status, message, { status });
  }
  goToEnseignant(id){
    this.route.navigate(['CMS/liste-enseignant',id]);
  }

}

interface userModel {
  id: number,
  username: string,
  email: string,
}