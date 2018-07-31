import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PneuService } from './../../services/pneu.service';
import { VehicleService } from './../../services/vehicle.service';
import { HistoryPneusService } from '../../services/history_pneus.service';
import { InstallPneuService } from '../../services/install-pneu.service';
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
  idPneu: number;

  constructor(
    private pneuService: PneuService,
    private vehicleService: VehicleService,
    private historyPneusService: HistoryPneusService,
    private uiSerice: UiService,
    private route: ActivatedRoute,
    private installPneuSerice: InstallPneuService
  ) { }

  ngOnInit() {
    this.pneuInstaled = new FormGroup({
      vehicle_id: new FormControl('', {
        validators: [Validators.required]
      }),
      side: new FormControl('', {
        validators: [Validators.required]
      }),
      position: new FormControl('', {
        validators: [Validators.required]
      }),
      eixo: new FormControl('', {
        validators: [Validators.required]
      }),
      odometer_instaled: new FormControl('', {
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
        this.idPneu = parseInt(id, 10);
        this.pneuService.one(id)
          .subscribe((pneu: Pneu) => {
            this.pneu = pneu;
          });
      });
  }

  onSubmit() {
    const date = new Date(this.pneuInstaled.value.date);
    const dateFormated = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const pneuInstaled = {
      ...this.pneuInstaled.value,
      date: dateFormated,
      pneu_id: this.idPneu
    };

    this.installPneuSerice.save(pneuInstaled)
      .subscribe(res => {
        console.log(res);
        this.uiSerice.showSnackBar('Registro salvo com sucesso', 3000);
      }, error => {
        console.error(error);
        this.uiSerice.showSnackBar('Erro, tente novamente mais tarde', 3000);
      });

    console.log(pneuInstaled);

    this.pneuService.istallUninstall(this.pneu.id, { is_installed: true })
      .subscribe(res => {
        console.log(res);
      });
  }

}
