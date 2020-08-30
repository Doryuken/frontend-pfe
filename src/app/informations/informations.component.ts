import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})

export class InformationsComponent implements OnInit {
  username : string;
  email : string;
  role : string;
  
  

  constructor(private crud : CrudService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    const token : { id : string } = jwt_decode(localStorage.getItem('token'));
    const userID = token.id; 
    this.crud.getOneMethod('users',userID)
    .subscribe((res : userModel ) => { 
      this.username =  res.username;
      this.email =  res.email;
      this.role =  res.role.name;
      });
  }
 
}

interface userModel {

  id: number,
  username: string,
  email:  string,
  provider : string,
  confirmed: boolean,
  blocked : boolean,
  role : {
    name : string,
    id : number
  }
 }

