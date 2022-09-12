import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: '',
    redirectTo: 'preconnexion',
    pathMatch: 'full'
  },
  {
    path: 'preconnexion',
    loadChildren: () => import('./preconnexion/preconnexion.module').then( m => m.PreconnexionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'brief',
    loadChildren: () => import('./brief/brief.module').then( m => m.BriefPageModule)
  },
  {
    path: 'rendu',
    loadChildren: () => import('./rendu/rendu.module').then( m => m.RenduPageModule)
  },
  {
    path: 'detail-brief',
    loadChildren: () => import('./detail-brief/detail-brief.module').then( m => m.DetailBriefPageModule)
  },
  {
    path: 'ressource',
    loadChildren: () => import('./ressource/ressource.module').then( m => m.RessourcePageModule)
  },
  {
    path: 'ajout-ress',
    loadChildren: () => import('./ajout-ress/ajout-ress.module').then( m => m.AjoutRessPageModule)
  },
  {
    path: 'res-forma',
    loadChildren: () => import('./res-forma/res-forma.module').then( m => m.ResFormaPageModule)
  },
  {
    path: 'ajou-rendu',
    loadChildren: () => import('./ajou-rendu/ajou-rendu.module').then( m => m.AjouRenduPageModule)
  },
  {
    path: 'ajour-res',
    loadChildren: () => import('./ajour-res/ajour-res.module').then( m => m.AjourResPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
