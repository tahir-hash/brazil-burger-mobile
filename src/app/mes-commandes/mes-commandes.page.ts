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
  selectedValue:string=this.enCours  
  selectDate:string=''
  own:any[]=[]
  constructor(private commandeServ: CommandeService,private token:TokenService) { }

  async ngOnInit() {
    let userId = await this.token.getData('userId')
    let tokenString = await this.token.getData('token')
    console.log("tahir "+tokenString)
    this.commandeServ.getOwnCommande(userId,tokenString).subscribe(commande=>{
      this.own=commande
      console.log(this.own)
    })
  }

  async changeState(etat:any,id:number){
    let tokenString = await this.token.getData('token')
    //alert(tokenString)
    this.commandeServ.stateChange(etat,id,tokenString).subscribe(err=>{
      console.log(err)
      location.reload()
    });
    //location.reload()
  }
}
