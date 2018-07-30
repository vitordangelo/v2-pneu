import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { PneuService } from './../../services/pneu.service';
import { UiService } from '../../services/ui.service';
import { Pneu } from './../../modules/pneu';

@Component({
  selector: 'app-list-pneus',
  templateUrl: './list-pneus.component.html',
  styleUrls: ['./list-pneus.component.css']
})
export class ListPneusComponent implements OnInit {
  displayedColumns: string[] = ['dimension', 'brand', 'pr', 'type', 'number',
    'registry', 'new', 'recachutado', 'instaled', 'uninstall', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  isLoading = false;
  pneus: Pneu[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private pneuService: PneuService,
    private router: Router,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.pneuService.all()
      .subscribe((pneus: any) => {
        this.pneus = pneus.pneus;
        this.dataSource.data = pneus.pneus;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      });
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(pneu: Pneu) {
    this.router.navigate(['pneu/edit-pneu/', pneu.id]);
  }

  onInstall(pneu: Pneu) {
    this.router.navigate(['pneu/install/', pneu.id]);
  }

  onUninstall(pneu: Pneu) {
    console.log(pneu);
  }

  onDelete(pneu: Pneu) {
    this.pneuService.del(pneu.id)
      .subscribe(res => {
        const pneusClone = this.pneus.slice(0);
        const indice = pneusClone.indexOf(pneu);
        pneusClone.splice(indice, 1);
        this.pneus = pneusClone;
        this.dataSource.data = this.pneus;
        this.uiService.showSnackBar('Pneu removido com sucesso', 3000);
      }, error => {
        console.error(error);
        this.uiService.showSnackBar('Ocorreu algum erro, tente novamente mais tarde!', 3000);
      });
  }
}
