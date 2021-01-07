import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'car-list',
    pathMatch: 'full'
  },
  {
    path: 'car-list',
    loadChildren: () => import('./components/car-list/car-list.module').then(m => m.CarListModule)
  },
  {
    path: 'car-save',
    loadChildren: () => import('./components/car-save/car-save.module').then(m => m.CarSaveModule)
  },
  {
    path: 'car-status-list',
    loadChildren: () => import('./components/car-status-list/car-status-list.module').then(m => m.CarStatusListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
