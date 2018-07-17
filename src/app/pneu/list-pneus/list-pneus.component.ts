import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { PneuService } from './../../services/pneu.service';

@Component({
  selector: 'app-list-pneus',
  templateUrl: './list-pneus.component.html',
  styleUrls: ['./list-pneus.component.css']
})
export class ListPneusComponent implements OnInit {
  displayedColumns: string[] = ['dimension', 'brand', 'pr', 'type', 'number', 'registry', 'new', 'recachutado'];
  dataSource = new MatTableDataSource();
  isLoading = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private pneuService: PneuService) { }

  ngOnInit() {
    this.isLoading = true;
    this.pneuService.all()
      .subscribe((pneus: any) => {
        this.dataSource.data = pneus.pneus;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      });
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
