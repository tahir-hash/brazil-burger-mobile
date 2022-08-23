import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Produit } from '../Shared/models/produit';
import { ProduitService } from '../Shared/services/produit.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  catalogue: Produit[] | undefined = undefined;
  handlerMessage: string
  constructor(private service: ProduitService, private alertController: AlertController) { }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2000
    }
  };

  ngOnInit(): void {
    this.service.all$().subscribe(data => {
      this.catalogue = data.getAll;
      //console.log(this.catalogue)
    })
  }
  //filter
  segmentChanged(event: any) {
    this.service.all$().subscribe(data => {
      if (event.target.value != "all" && event.target.value != "prix") {
        this.catalogue = data.getAll?.filter(prod => prod.type == event.target.value);
      }
      else { this.catalogue = data.getAll; }
    })
  }

  //alert
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Filtrer par prix',
      inputs: [
        {
          name:'price',
          type: "range",
          min: 1000,
          max: 4000,
          value:1000
        }
      ],
      buttons: [
        {
          text: 'OK',
        handler: data => {
          this.service.all$().subscribe(produit => {
            this.catalogue = produit.getAll?.filter(prod => prod.prix <= data.price);
          })
        },
        }
      ],
    });
    await alert.present();
  }

}
