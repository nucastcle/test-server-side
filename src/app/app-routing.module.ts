import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
