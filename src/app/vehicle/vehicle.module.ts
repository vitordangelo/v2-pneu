import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { SharedModule } from '../shared/shared.module';
import { PneusVehicleComponent } from './pneus-vehicle/pneus-vehicle.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';

@NgModule({
  imports: [
    VehicleRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NewVehicleComponent, PneusVehicleComponent, ListVehiclesComponent]
})
export class VehicleModule { }
