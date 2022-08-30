import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../Shared/models/cart';
import { CartService } from '../Shared/services/cart.service';
import { CommandeService } from '../Shared/services/commande.service';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  items:Cart={
    all:[]
  };
  prix: number=0;

  constructor(private cart:CartService,
    private commandeServ: CommandeService,
    private token:TokenService,
    private router: Router) { }

  ngOnInit() {
    /* this.cart.Panier.subscribe(data=>{
      if(data.burgerCommandes && data.menuCommandes && data.boissonTailleCommandes && data.portionFriteCommandes){
        data.all=[...data.burgerCommandes,...data.menuCommandes,...data.boissonTailleCommandes,...data.portionFriteCommandes]; 
      }
      this.items=data
      this.prix=this.cart.getMontant()
    }) */
  }

  removeToCart(obj:any) {
    this.cart.remove(obj);
  }

 /*  async validCmd(){
    let tokenSring= await this.token.getData('token')
    if(this.token.isConnect()){
      
      if(this.activeTab=='search'){
        let zone: Zone= {
          id:this.commande.value.zone
        }
        this.cart.Panier.value.zone=zone
        this.cart.Panier.value.telClient=this.commande.value.telClient
      }
      if(this.activeTab=='result'){
        delete(this.cart.Panier.value.zone)
        delete(this.cart.Panier.value.telClient)
      }
      console.log(this.cart.Panier.value);
    //  console.log(this.cart.Panier.value)
      
      this.commandeServ.saveCart(this.cart.Panier.value,tokenSring).subscribe(
        err=>console.log(err)
      )
      this.cart.emptyCart(this.cart.Panier).then(()=>{
        window.location.reload();
      });
      this.router.navigate(['/catalogue']);
    }
     else{
      this.router.navigate(['/login']);

    }
    //console.log(this.cart.Panier.value)
  } */
}
