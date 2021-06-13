import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TermsGuardGuard } from './guards/terms-guard.guard';

// sets up routes constant where you define your routes
const routes: Routes = [


  {
  path: 'about',
  loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
  canActivate: [TermsGuardGuard]

},
{
  path: 'explorer',
  loadChildren: () => import('./pages/explorer/explorer.module').then(m => m.ExplorerModule),
  canActivate: [TermsGuardGuard]
},
{
  path:'**',
  redirectTo: ''
}
];

// configures NgModule imports and exports
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { //forRoot is for the all app.
      scrollPositionRestoration: 'top', //זה הגדרות של התנהגות שלא חייבים להעביר
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
