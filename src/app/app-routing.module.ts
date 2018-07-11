import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'pneu',
    loadChildren: './pneu/pneu.module#PneuModule'
  },
  {
    path: 'vehicle',
    loadChildren: './vehicle/vehicle.module#VehicleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
