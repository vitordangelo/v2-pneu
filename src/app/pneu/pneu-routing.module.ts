import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPneuComponent } from './new-pneu/new-pneu.component';

const routes: Routes = [
  { path: '', component: NewPneuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PneuRoutingModule { }
