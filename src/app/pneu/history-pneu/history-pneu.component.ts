import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PneuService } from './../../services/pneu.service';
import { VehicleService } from './../../services/vehicle.service';

import { Pneu } from './../../modules/pneu';
import { Vehicle } from './../../modules/vehicle';

@Component({
  selector: 'app-history-pneu',
  templateUrl: './history-pneu.component.html',
  styleUrls: ['./history-pneu.component.css']
})
export class HistoryPneuComponent implements OnInit {
  historyPneuForm: FormGroup;
  isLoading = false;
  pneus: Pneu[];
  vehicles: Vehicle[];

  constructor(
    private pneuService: PneuService,
    private vehicleService: VehicleService,
  ) { }

  ngOnInit() {
    this.historyPneuForm = new FormGroup({
      pneu: new FormControl('', {
        validators: [Validators.required]
      }),
      position: new FormControl('', {
        validators: [Validators.required]
      }),
      vehicle: new FormControl('', {
        validators: [Validators.required]
      }),
      odometerInstallation: new FormControl('', {
        validators: [Validators.required]
      }),
      odometerUninstall: new FormControl('', {
        validators: [Validators.required]
      }),
      distance: new FormControl('', {
        validators: [Validators.required]
      }),
      recapagem: new FormControl('', {
        validators: [Validators.required]
      }),
      cause: new FormControl('', {
        validators: [Validators.required]
      }),
      obs: new FormControl('', {
        validators: [Validators.required]
      }),
    });

    this.isLoading = true;
    this.pneuService.all()
      .subscribe((pneus: any) => {
        this.pneus = pneus.pneus;
        this.isLoading = false;
      });

    this.vehicleService.all()
      .subscribe((vehicles: any) => {
        this.vehicles = vehicles.vehicles;
        this.isLoading = false;
      });
  }

  onSubmit() {
    console.log(this.historyPneuForm.value);
  }

}
