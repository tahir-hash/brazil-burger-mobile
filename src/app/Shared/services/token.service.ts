import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  connect:boolean=false
  loggedState = new BehaviorSubject<boolean>(false);

  getLoggedState(){
    return this.loggedState.asObservable();
  }
  constructor(private router:Router, private storage: Storage) {
    this.init()
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    if (ls) {
      this.loggedState.next(ls)
    }
   }
  

  getToken():any{
    return localStorage.getItem('token');
  }

  saveToken(key:string,token:any){
   return this.storage.set(key,token);
  }

  isConnect():boolean{
    var token=null
    this.getData('token').then(data=>{
      token = data
    })
    if (token != null) {
      return this.connect = true
    }
    return this.connect
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
      console.log("promess"+val);
      return val
    });
  }
}
