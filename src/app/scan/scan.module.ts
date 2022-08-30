import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { IonicModule } from '@ionic/angular';
import { ScanPageRoutingModule } from './scan-routing.module';

import { ScanPage } from './scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [ScanPage]
})
export class ScanPageModule {}
