import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }


  async toast(message?: string,color:string='dark',duration:number=4000) {
    const toasted = await this.toastController.create({
      message: message,
      duration: duration,
      color: color
    });
    toasted.present();  
  }
}
