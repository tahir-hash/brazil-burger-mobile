import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard/AuthGuard';
import { Role } from './Shared/models/Role';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'details-products/:id/:type',
    loadChildren: () => import('./details-products/details-products.module').then( m => m.DetailsProductsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mes-commandes',
    loadChildren: () => import('./mes-commandes/mes-commandes.module').then( m => m.MesCommandesPageModule)
  },
  {
    path: 'details-cmd/:id',
    loadChildren: () => import('./details-cmd/details-cmd.module').then( m => m.DetailsCmdPageModule)
  },
  {
    path: 'livreur',
    loadChildren: () => import('./livreur/livreur.module').then( m => m.LivreurPageModule)
  },
  {
    path: 'details-liv/:id',
    loadChildren: () => import('./details-cmd-liv/details-cmd-liv.module').then( m => m.DetailsCmdLivPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then( m => m.ScanPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
