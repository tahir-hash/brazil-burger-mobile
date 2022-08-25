import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
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

  /* isConnect(){
    var token=null
   this.getData('token').then(data=>{
         token=data 
         if (token != null) {
       this.connect = true
    }
    else{
      this.connect = false
    }
    console.log("mbacke "+token);
    console.log("tahir "+this.connect);
    return this.connect
    })
  } */

  isConnect(isLogged:boolean){
    this.getData('token').then((data) => {
      if(data!=null){
       return isLogged=true
      }
      else{
     return  isLogged=false
      }
     //console.log(isLogged);
   })
  }

  logOut(){
    this.storage.clear()
    this.router.navigate(['/catalogue']);
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

