import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Produit } from '../Shared/models/produit';
import { ProduitService } from '../Shared/produit.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  catalogue: Produit[] | undefined = undefined;

  constructor(private service: ProduitService,private alertController: AlertController) { }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 2000
    }
  };

  ngOnInit(): void {
    this.service.all$().subscribe(data=>{
       this.catalogue=data.getAll;
       console.log(this.catalogue)
    })
  }
//filter
  segmentChanged(event:any)
  {
    this.service.all$().subscribe(data=>{
      if(event.target.value!="all")
      {
        this.catalogue=data.getAll?.filter(prod=>prod.type==event.target.value);
      }
      else
      {this.catalogue=data.getAll;}
   })
  }

  //alert
  /* async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Filtrer par prix',
      inputs:[
        {
          type: "range",
          min: 1000,
          max: 30000,
        }
      ],
      buttons: ['OK'],
    });

    await alert.present();
  } */

}
