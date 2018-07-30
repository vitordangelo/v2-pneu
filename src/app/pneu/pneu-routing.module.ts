import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPneuComponent } from './new-pneu/new-pneu.component';
import { HistoryPneuComponent } from './history-pneu/history-pneu.component';
import { ListPneusComponent } from './list-pneus/list-pneus.component';
import { PneuInstaledComponent } from './pneu-install/pneu-install.component';

const routes: Routes = [
  { path: '', component: NewPneuComponent },
  { path: 'edit-pneu/:id', component: NewPneuComponent },
  { path: 'history', component: HistoryPneuComponent },
  { path: 'list', component: ListPneusComponent },
  { path: 'install', component: PneuInstaledComponent },
  { path: 'install/:id', component: PneuInstaledComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PneuRoutingModule { }
