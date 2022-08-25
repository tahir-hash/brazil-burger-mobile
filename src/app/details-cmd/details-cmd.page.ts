import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../Shared/services/commande.service';
import { TokenService } from '../Shared/services/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details-cmd',
  templateUrl: './details-cmd.page.html',
  styleUrls: ['./details-cmd.page.scss'],
})
export class DetailsCmdPage implements OnInit {
  all:any[]
  montant:number
  pathImage=environment.pathImage

  constructor(private commandeServ:CommandeService,private token:TokenService,private route:ActivatedRoute) { }

  async ngOnInit() {

    /*  */
    let id = this.route.snapshot.paramMap.get('id');
    let tokenString = await this.token.getData('token')

    this.commandeServ.one$(id,tokenString).subscribe(data=>{
      if(data.burgerCommandes && data.menuCommandes && data.boissonTailleCommandes && data.portionFriteCommandes){
        this.all=[...data.burgerCommandes,...data.menuCommandes,...data.boissonTailleCommandes,...data.portionFriteCommandes]; 
      }
      this.montant=data.montant;
      console.log(data)
      //console.log(this.all);
    })
  }

}
