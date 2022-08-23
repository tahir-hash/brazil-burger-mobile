import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../Shared/models/produit';
import { ProduitService } from '../Shared/services/produit.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.page.html',
  styleUrls: ['./details-products.page.scss'],
})
export class DetailsProductsPage implements OnInit {
  produit: Produit | undefined = undefined;

  constructor(private produitService: ProduitService, public route: ActivatedRoute) { }

  ngOnInit(): void {
   
    let id = this.route.snapshot.paramMap.get('id');
    
    this.produitService.one$(id).subscribe(data => {
      this.produit = data
      console.log(data); 
    })
  }

}
