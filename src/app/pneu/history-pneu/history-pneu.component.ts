import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PneuService } from './../../services/pneu.service';
import { VehicleService } from './../../services/vehicle.service';
import { HistoryPneusService } from '../../services/history_pneus.service';
import { UiService } from './../../services/ui.service';

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
    private historyPneusService: HistoryPneusService,
    private uiSerice: UiService,
  ) { }

  ngOnInit() {
    this.historyPneuForm = new FormGroup({
      pneu_id: new FormControl('', {
        validators: [Validators.required]
      }),
      position: new FormControl('', {
        validators: [Validators.required]
      }),
      vehicle_id: new FormControl('', {
        validators: [Validators.required]
      }),
      odometerInstalled: new FormControl('', {
        validators: [Validators.required]
      }),
      odometerUninstalled: new FormControl('', {
        validators: [Validators.required]
      }),
      km_distance: new FormControl('', {
        validators: [Validators.required]
      }),
      recapagem: new FormControl('', {
        validators: [Validators.required]
      }),
      note: new FormControl('', {
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
    this.historyPneusService.save(this.historyPneuForm.value)
      .subscribe(res => {
        this.uiSerice.showSnackBar('Histórico realizado com sucesso!', 3000);
      }, error => {
        this.uiSerice.showSnackBar('Falha ao cadastrar histórico. Tente novamente!', 3000);
      });
  }

}
