import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';

const routes: Routes = [
  { path: '', component: NewVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
