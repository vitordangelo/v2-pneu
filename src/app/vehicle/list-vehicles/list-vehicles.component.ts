import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { Vehicle } from './../../modules/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {
  displayedColumns: string[] = ['number_car', 'brand', 'type', 'year', 'plate', 'edit', 'delete'];
  dataSource = new MatTableDataSource();
  isLoading = false;
  vehicles: Vehicle[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private vehicleService: VehicleService,
    private uiService: UiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.vehicleService.all()
      .subscribe((vehicles: any) => {
        this.vehicles = vehicles.vehicles;
        this.dataSource.data = vehicles.vehicles;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      });
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(vehicle: Vehicle) {
    this.router.navigate(['vehicle/edit-vehicle/', vehicle.id]);
  }

  onDelete(vehicle: Vehicle) {
    this.vehicleService.del(vehicle.id)
      .subscribe(res => {
        const vehiclesClone = this.vehicles.slice(0);
        const indice = vehiclesClone.indexOf(vehicle);
        vehiclesClone.splice(indice, 1);
        this.vehicles = vehiclesClone;
        this.dataSource.data = this.vehicles;
        this.uiService.showSnackBar('Veículo removido com sucesso', 3000);
      }, error => {
        console.error(error);
        this.uiService.showSnackBar('Ocorreu algum erro, tente novamente mais tarde!', 3000);
      });
  }
}
