import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsCmdLivPage } from './details-cmd-liv.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsCmdLivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsCmdLivPageRoutingModule {}
