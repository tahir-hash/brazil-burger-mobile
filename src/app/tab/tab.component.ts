import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../Shared/services/cart.service';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  isLogged: any
  isclient:any
  islivreur:any
  count:any=0

  @Output() loggedChanged: EventEmitter<any> = new EventEmitter();
  constructor(private token: TokenService,private cart:CartService) {
  }

 async ngOnInit() {
  
    this.token.getData('token').then((data) => {
      if (data != null) {
        this.isLogged = true
        this.isclient= this.token.isClient(data)
        this.islivreur= this.token.isLivreur(data)
      }
      else {
        this.isLogged = false
      }
      //console.log(this.isLogged);
    })

    this.cart.Panier.subscribe(info=>{
      if(info.burgerCommandes && info.menuCommandes && info.boissonTailleCommandes && info.portionFriteCommandes){
        this.count=info.burgerCommandes?.length + info.menuCommandes?.length + info.portionFriteCommandes?.length + info.boissonTailleCommandes?.length
      }
    })

  }
  logOut() {
    this.token.logOut();
    //this.router.navigateByUrl('/catalogue');
  }
}
