import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    VehicleRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NewVehicleComponent]
})
export class VehicleModule { }
