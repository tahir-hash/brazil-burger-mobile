import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss'],
})
export class MenuWrapperComponent implements OnInit {
  isLogged:boolean
  isclient:any
  islivreur:any
  constructor(private token:TokenService, private router:Router) {
  }

  ngOnInit() {
    /* this.token.getLoggedState().subscribe(data=>{
      this.isLogged =data
     }); */
     this.token.getData('token').then((data) => {
      if(data!=null){
       this.isLogged=true
       this.isclient= this.token.isClient(data)
        this.islivreur= this.token.isLivreur(data)
      }
      else{
       this.isLogged=false
      }
     console.log(this.isLogged);
   })

   console.log(this.token.getData('token'))
  }
 
  logOut(){
    this.token.logOut();
    //this.router.navigateByUrl('/catalogue');
  }

}
