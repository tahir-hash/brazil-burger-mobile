import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoissonTaille } from '../Shared/models/boisson-taille';
import { BoissonTailleCommande } from '../Shared/models/boisson-taille-commande';
import { MenuCommande } from '../Shared/models/menu-commande';
import { PortionFriteCommande } from '../Shared/models/portion-frite-commande';
import { Produit } from '../Shared/models/produit';
import { CartService } from '../Shared/services/cart.service';
import { ProduitService } from '../Shared/services/produit.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.page.html',
  styleUrls: ['./details-products.page.scss'],
})
export class DetailsProductsPage implements OnInit {
  produit: Produit | undefined = undefined;
  btnQte=1
  image:any
  commandeMenuBoissonTailles:BoissonTaille[] = [];
  tabBoisson:BoissonTailleCommande[]=[]
  tabFries:PortionFriteCommande[]=[]
  constructor(private produitService: ProduitService, public route: ActivatedRoute,private cart:CartService) { }

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.produitService.one$(id).subscribe(data => {
      this.produit = data
      if(this.produit?.burger){
        this.image=this.produit.burger?.image
      }
      if(this.produit?.menu){
        this.image=this.produit.menu?.image
      }
    })
  }

  valueCount(event:any){
    this.btnQte=event
  }
  
  addToCart(det:Produit|undefined){
    if(det?.type=='burger'){
      let obj={
        quantite:Number(this.btnQte),
        burger: det
      }
   //console.log('tahir '+obj.burger.id)
      this.cart.addBurger(obj)
    }
    if(det?.type=='menu'){
      console.log(det)
      let obj:MenuCommande={
        quantite:Number(this.btnQte),
        menu: {
          id:Number(det.id),
          nom:det.nom,
          image:det.image,
          type:det.type,
          prix:det.prix,
          commandeMenuBoissonTailles:[]
        }
      }
      this.cart.addMenu(obj)
    }
   //this.cart.addBoissonTaille(this.tabBoisson)
   //this.cart.addfrites(this.tabFries)

   //console.log(this.tab1)
    //console.log(this.cart.Panier.value)
  }
}

