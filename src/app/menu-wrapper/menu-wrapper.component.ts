import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Shared/services/cart.service';
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
  count:any=0

  constructor(private token:TokenService,private cart: CartService) {
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

   this.cart.Panier.subscribe(info=>{
    if(info.burgerCommandes && info.menuCommandes && info.boissonTailleCommandes && info.portionFriteCommandes){
      this.count=info.burgerCommandes?.length + info.menuCommandes?.length + info.portionFriteCommandes?.length + info.boissonTailleCommandes?.length
    }
    
  })
  }
 
  logOut(){
    this.token.logOut();
    //this.router.navigateByUrl('/catalogue');
  }

}
