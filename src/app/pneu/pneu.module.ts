import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PneuRoutingModule } from './pneu-routing.module';
import { NewPneuComponent } from './new-pneu/new-pneu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PneuRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NewPneuComponent]
})
export class PneuModule { }
