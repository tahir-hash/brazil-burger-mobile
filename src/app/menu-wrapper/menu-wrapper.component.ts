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
  constructor(private token:TokenService, private router:Router) {
  }

  ngOnInit() {
    /* this.token.getLoggedState().subscribe(data=>{
      this.isLogged =data
     }); */
     this.isLogged=false
  }
 
  logOut(){
    this.token.logOut();
    this.router.navigateByUrl('/catalogue');
  }

}
