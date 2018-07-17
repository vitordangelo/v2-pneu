import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPneuComponent } from './new-pneu/new-pneu.component';
import { HistoryPneuComponent } from './history-pneu/history-pneu.component';
import { ListPneusComponent } from './list-pneus/list-pneus.component';

const routes: Routes = [
  { path: '', component: NewPneuComponent },
  { path: 'history', component: HistoryPneuComponent },
  { path: 'list', component: ListPneusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PneuRoutingModule { }
