import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Role } from '../models/Role';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  connect:boolean=false
  
  constructor(private router:Router, private storage: Storage) {
    this.init()   
   }
  

  getToken():any{
    return localStorage.getItem('token');
  }

  saveToken(key:string,token:any){
   return this.storage.set(key,token);
  }



   isConnect(token:any){
    let date=new Date().getTime()/1000;
    let jwt_decoded:any=jwt_decode(token)
    let diff= jwt_decoded - date;

    if(token != null && diff > 0){
      return true;
    }
    return false
  }

  isClient(token:any){
    let jwt_decoded:any=jwt_decode(token)
    if(jwt_decoded!=null && jwt_decoded.roles[0]==Role.client){
      return true
    }
    return false
  }

  isLivreur(token:any){
    let jwt_decoded:any=jwt_decode(token)
    if(jwt_decoded.roles[0]==Role.livreur){
      return true
    }
    return false
  }

  async logOut(){
    await this.storage.clear()
    this.router.navigate(['/catalogue']).then(()=>{
      location.reload()
    })
  }

  async init(){
    //console.log('ok');
    await this.storage.create();
    //console.log('tahirbrazilburger')
  }
  async getData(key:string){
    return await this.storage.get(key).then((val)=>{
      return val
    });
  }
}
function resolve(data: any) {
  throw new Error('Function not implemented.');
}

