import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PneuRoutingModule } from './pneu-routing.module';
import { NewPneuComponent } from './new-pneu/new-pneu.component';
import { SharedModule } from '../shared/shared.module';
import { HistoryPneuComponent } from './history-pneu/history-pneu.component';

@NgModule({
  imports: [
    PneuRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [NewPneuComponent, HistoryPneuComponent]
})
export class PneuModule { }
