import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PneuService } from './../../services/pneu.service';
import { VehicleService } from './../../services/vehicle.service';
import { HistoryPneusService } from '../../services/history_pneus.service';
import { UiService } from './../../services/ui.service';
import { Vehicle } from '../../modules/vehicle';
import { Pneu } from '../../modules/pneu';

@Component({
  selector: 'app-pneu-install',
  templateUrl: './pneu-install.component.html',
  styleUrls: ['./pneu-install.component.css']
})
export class PneuInstaledComponent implements OnInit {
  pneuInstaled: FormGroup;
  isLoading = false;
  vehicles: Vehicle[];
  pneu: Pneu;

  constructor(
    private pneuService: PneuService,
    private vehicleService: VehicleService,
    private historyPneusService: HistoryPneusService,
    private uiSerice: UiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pneuInstaled = new FormGroup({
      vehicle_id: new FormControl('', {
        validators: [Validators.required]
      }),
      position: new FormControl('', {
        validators: [Validators.required]
      }),
      eixoDianteiro: new FormControl('', {
        validators: [Validators.required]
      }),
      eixoTrasiero: new FormControl('', {
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

      this.route.params.subscribe(params => {
        const id = params['id'];
        this.pneuService.one(id)
          .subscribe((pneu: Pneu) => {
            this.pneu = pneu;
          });
      });
  }

  onSubmit() {
    const date = new Date(this.pneuInstaled.value.date);
    const dateFormated = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    console.log({ ...this.pneuInstaled.value, date: dateFormated });

    this.pneuService.istallUninstall(this.pneu.id, { is_installed: true })
      .subscribe(res => {
        console.log(res);
      });
  }

}
