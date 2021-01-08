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
  },
  {
    path: 'car-status-save',
    loadChildren: () => import('./components/car-status-save/car-status-save.module').then(m => m.CarStatusSaveModule)
  },
  {
    path: 'owner-list',
    loadChildren: () => import('./components/owner-list/owner-list.module').then( m => m.OwnerListModule)
  },
  {
    path: 'owner-save',
    loadChildren: () => import('./components/owner-save/owner-save.module').then( m => m.OwnerSaveModule )
  },
  {
    path: 'car-owner-list',
    loadChildren: () => import('./components/car-owner-list/car-owner-list.module').then( m => m.CarOwnerListModule )
  },
  {
    path: 'car-owner-save',
    loadChildren: () => import('./components/car-owner-save/car-owner-save.module').then( m => m.CarOwnerSaveModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
