import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesCommandesPageRoutingModule } from './mes-commandes-routing.module';

import { MesCommandesPage } from './mes-commandes.page';
import { FilterCmdPipe } from '../Pipe/filter-cmd.pipe';
import { FilterDatePipe } from '../Pipe/filter-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesCommandesPageRoutingModule,
    
  ],
  declarations: [MesCommandesPage,FilterCmdPipe,FilterDatePipe]
})
export class MesCommandesPageModule {}
