import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../Shared/models/cart';
import { MenuCommande } from '../Shared/models/menu-commande';
import { Quartier } from '../Shared/models/quartier';
import { Zone } from '../Shared/models/zone';
import { CartService } from '../Shared/services/cart.service';
import { CommandeService } from '../Shared/services/commande.service';
import { QuartiersService } from '../Shared/services/quartiers.service';
import { ToastService } from '../Shared/services/toast.service';
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
  qrt:Quartier[]=[]
  valueQuartier:any
  prix: number=0;
  commande:any
  activeTab:string="livrer"
  constructor(private cart:CartService,
    private commandeServ: CommandeService,
    private token:TokenService,
    private quartier:QuartiersService,
    private router: Router,private toast:ToastService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.cart.Panier.subscribe(data=>{
      if(data.burgerCommandes && data.menuCommandes && data.boissonTailleCommandes && data.portionFriteCommandes){
        data.all=[...data.burgerCommandes,...data.menuCommandes,...data.boissonTailleCommandes,...data.portionFriteCommandes]; 
      }
      this.items=data
      console.log(this.items)
      this.prix=this.cart.getMontant()
    })

    this.commande = this.fb.group({
      zone: [null, Validators.required],
      telClient:[null, Validators.required],
    })

    this.quartier.getQuartier$().subscribe(quart=>{
      this.qrt=quart
    })
  }
  get zone() { return this.commande.get('zone') }
  get telClient() { return this.commande.get('telClient') }

  increaseCartQty(prod:any,quantite:any){
    if(prod?.type=='burger'){
      let obj={
        quantite:1,
        burger: prod
      }
      this.cart.addBurger(obj)
    }
    if(prod?.type=='menu'){
      let obj:MenuCommande={
        quantite:1,
        menu: {
          id:Number(prod.id),
          nom:prod.nom,
          image:prod.image,
          type:prod.type,
          prix:prod.prix,
          commandeMenuBoissonTailles:[]
        }
      }
      this.cart.addMenu(obj)
    }
  }

  decreaseCartQty(prod:any,quantite:any){
    if(quantite!=1){
      if(prod?.type=='burger'){
        let obj={
          quantite:-1,
          burger: prod
        }
        this.cart.addBurger(obj)
      }
      if(prod?.type=='menu'){
        let obj:MenuCommande={
          quantite:-1,
          menu: {
            id:Number(prod.id),
            nom:prod.nom,
            image:prod.image,
            type:prod.type,
            prix:prod.prix,
            commandeMenuBoissonTailles:[]
          }
        }
        this.cart.addMenu(obj)
      }
    }
    else{
      this.cart.remove(prod)
    }
  }


  removeToCart(obj:any) {
    this.cart.remove(obj);
    this.toast.toast('Produit supprimé avec succés!!','danger',2000)
  }
  segmentChanged(event:any){
    this.activeTab=event.target.value
  }
   async validCmd(){

    let tokenSring= await this.token.getData('token')
    if(this.token.isConnect(tokenSring)){
      
      if(this.activeTab=='livrer'){
        let zone: Zone= {
          id:this.commande.value.zone
        }
        this.cart.Panier.value.zone=zone
        this.cart.Panier.value.telClient=this.commande.value.telClient
      }
      if(this.activeTab=='place'){
        delete(this.cart.Panier.value.zone)
        delete(this.cart.Panier.value.telClient)
      }
      console.log(this.cart.Panier.value);
      
      this.commandeServ.saveCart(this.cart.Panier.value,tokenSring).subscribe(
        err=>console.log(err)
      )
      this.cart.emptyCart();
      this.router.navigate(['/catalogue'])
    //  
    }
     else{
      this.router.navigate(['/login']);

    }
  }
}
