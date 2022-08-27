import { Component, OnInit } from '@angular/core';
import { LivreurService } from '../Shared/services/livreur.service';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.page.html',
  styleUrls: ['./livreur.page.scss'],
})
export class LivreurPage implements OnInit {
  encours= "EN COURS"
  livraison:any
  constructor(private token:TokenService, private livreurServ:LivreurService) { }

  async ngOnInit() {
    let userId = await this.token.getData('userId')
    let tokenString = await this.token.getData('token')

    this.livreurServ.livraison(userId,tokenString,this.encours).subscribe(commande=>{
      this.livraison=commande
      console.log(this.livraison)
    })

  }

}
