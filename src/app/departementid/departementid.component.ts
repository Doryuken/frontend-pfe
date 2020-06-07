import { FormationComponent } from './../formation/formation.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-departementid',
  templateUrl: './departementid.component.html',
  styleUrls: ['./departementid.component.scss']
})
export class DepartementidComponent implements OnInit {
  private forms = new FormationComponent(this.http, this.crud);
  public url = '/departements';
  dept : departementModel;
  data : formationModel [];
  id : number;
  inputName:string;

  settings = {
    columns: {
      nom: {
        title: 'Nom'
      }},

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
      perPage : 10
    }
  };
 

 
  constructor(
    private http : HttpClient,
    private crud :  CrudService,
    private route : ActivatedRoute,
  ) {}

  getOneDept(){
    this.crud.getOneMethod(this.url,this.id)
    .subscribe((res  : departementModel) => 
    { 
      this.dept = res;
      this.data = this.dept.formations;
    });
  } 
  deleteDeptForm(event){
   if (window.confirm('Êtes-vous sûr de vouloir continuer ?')) {
    const index = this.dept.formations.findIndex(elem => elem.id == event.data.id);
    this.dept.formations.splice(index,1);
    this.crud.updateMethod(this.url,this.id,this.dept)
    .subscribe(res => this.ngOnInit(), error => this.ngOnInit());
    event.confirm.resolve()
  } else {
    event.confirm.reject();
  }
 
  }

  updateDeptForm(event){
  this.forms.updateForm(event);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneDept();

  }

  createForm(formName){
    this.crud.createMethod(this.forms.url,formName)
    .subscribe(( res  : formationModel )=> { 
      this.dept.formations.push({id : res.id});
      this.crud.updateMethod(this.url,this.id,this.dept)
      .subscribe(res => this.ngOnInit(), error => this.ngOnInit());
      });
      this.inputName = '';
   
}
}
interface departementModel{
  id : number,
  nom : string,
  formations :  [formationModel] 
}
interface formationModel{
  id : number,
  nom ? : string
}