import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsCmdPage } from './details-cmd.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsCmdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsCmdPageRoutingModule {}
