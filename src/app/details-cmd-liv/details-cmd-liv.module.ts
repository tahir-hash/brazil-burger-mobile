import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';

import { DetailsCmdLivPageRoutingModule } from './details-cmd-liv-routing.module';

import { DetailsCmdLivPage } from './details-cmd-liv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsCmdLivPageRoutingModule,
    QRCodeModule
  ],
  declarations: [DetailsCmdLivPage]
})
export class DetailsCmdLivPageModule {}
