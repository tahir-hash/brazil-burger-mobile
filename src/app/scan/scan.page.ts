import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../Shared/services/commande.service';
import { ToastService } from '../Shared/services/toast.service';
import { TokenService } from '../Shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  result: any=''
  idClient:number;
  tokenString:string;
  validee = "VALIDEE"
  constructor(private router: Router,private commandeServ:CommandeService,private token:TokenService,private toast:ToastService) { }

  async ngOnInit() {
    this.idClient= await this.token.getData('userId')
    this.tokenString= await this.token.getData('token')
  }
   
  
  onScanSuccess(event :string){
    this.result=JSON.parse(event)
   /*  console.log('cmd '+this.result.idCommande)
    console.log('client '+this.result.idClient) */
    console.log('cmd '+Number(this.result.idCommande))
    if(this.result.idClient== this.idClient){
      this.commandeServ.stateChange(this.validee,Number(this.result.idCommande),this.tokenString).subscribe(
        data=>{
          console.log(data);
        },err=>{console.log(err);}
      )
      this.toast.toast('Commande validée','success',4000)
      this.router.navigateByUrl('/catalogue')
    }
    else{
      this.toast.toast('Error','danger',4000)
    }
  } 
  
}