import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from '../Shared/services/commande.service';
import { TokenService } from '../Shared/services/token.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-details-cmd-liv',
  templateUrl: './details-cmd-liv.page.html',
  styleUrls: ['./details-cmd-liv.page.scss'],
})
export class DetailsCmdLivPage implements OnInit {
  textShow:string
  montant:number
  myColor='myColor'
  constructor(private commandeServ:CommandeService,private token:TokenService,private route:ActivatedRoute) { }

  async ngOnInit() {

    /*  */
    let id = this.route.snapshot.paramMap.get('id');
    let tokenString = await this.token.getData('token')

    this.commandeServ.one$(id,tokenString).subscribe(data=>{
        this.textShow= data.id+" "+ data.client.id
    })
  }
}
