import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {
  displayedColumns: string[] = ['number_car', 'brand', 'type', 'year', 'plate', 'edit'];
  dataSource = new MatTableDataSource();
  isLoading = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private pneuService: VehicleService) { }

  ngOnInit() {
    this.isLoading = true;
    this.pneuService.all()
      .subscribe((vehicles: any) => {
        this.dataSource.data = vehicles.vehicles;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      });
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
