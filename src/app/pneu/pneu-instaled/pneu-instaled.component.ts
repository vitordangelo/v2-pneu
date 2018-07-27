import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PneuService } from './../../services/pneu.service';
import { VehicleService } from './../../services/vehicle.service';
import { HistoryPneusService } from '../../services/history_pneus.service';
import { UiService } from './../../services/ui.service';

import { Vehicle } from '../../modules/vehicle';

@Component({
  selector: 'app-pneu-instaled',
  templateUrl: './pneu-instaled.component.html',
  styleUrls: ['./pneu-instaled.component.css']
})
export class PneuInstaledComponent implements OnInit {
  pneuInstaled: FormGroup;
  isLoading = false;
  vehicles: Vehicle[];

  constructor(
    private pneuService: PneuService,
    private vehicleService: VehicleService,
    private historyPneusService: HistoryPneusService,
    private uiSerice: UiService,
  ) { }

  ngOnInit() {
    this.pneuInstaled = new FormGroup({
      vehicle_id: new FormControl('', {
        validators: [Validators.required]
      }),
      position: new FormControl('', {
        validators: [Validators.required]
      }),
      odometerInstalled: new FormControl('', {
        validators: [Validators.required]
      }),
      obs: new FormControl('', {
        validators: [Validators.required]
      }),
      date: new FormControl('', {
        validators: [Validators.required]
      }),
    });

    this.isLoading = true;
    this.vehicleService.all()
      .subscribe((vehicles: any) => {
        this.vehicles = vehicles.vehicles;
        this.isLoading = false;
      });
  }

  onSubmit() {
    const date = new Date(this.pneuInstaled.value.date);
    const dateFormated = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    console.log({ ...this.pneuInstaled.value, date: dateFormated });
  }

}
