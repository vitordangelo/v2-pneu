import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { PneusVehicleComponent } from './pneus-vehicle/pneus-vehicle.component';

const routes: Routes = [
  { path: '', component: NewVehicleComponent},
  { path: 'pneus', component: PneusVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
