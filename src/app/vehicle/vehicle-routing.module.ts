import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PneusVehicleComponent } from './pneus-vehicle/pneus-vehicle.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';

const routes: Routes = [
  { path: '', component: NewVehicleComponent},
  { path: 'edit-vehicle/:id', component: NewVehicleComponent},
  { path: 'pneus', component: PneusVehicleComponent},
  { path: 'list', component: ListVehiclesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
