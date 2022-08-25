import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../Shared/services/commande.service';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.page.html',
  styleUrls: ['./mes-commandes.page.scss'],
})
export class MesCommandesPage implements OnInit {

  enCours = "EN COURS"
  validee = "VALIDEE"
  annulee = "ANNULEE"
  own:any[]=[]
  constructor(private commandeServ: CommandeService,private token:TokenService) { }

  ngOnInit() {
    this.token.getData('userId').then(data=>{
      this.commandeServ.getOwnCommande(data).subscribe(commande=>{
        this.own=commande
        console.log(this.own)

      })
    })
  }
}
