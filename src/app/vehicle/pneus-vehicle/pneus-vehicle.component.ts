import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PneuService } from './../../services/pneu.service';
import { VehicleService } from '../../services/vehicle.service';
import { PneusVehicleService } from '../../services/pneus-vehicle.service';
import { UiService } from '../../services/ui.service';

import { Pneu } from '../../modules/pneu';
import { Vehicle } from './../../modules/vehicle';

@Component({
  selector: 'app-pneus-vehicle',
  templateUrl: './pneus-vehicle.component.html',
  styleUrls: ['./pneus-vehicle.component.css']
})
export class PneusVehicleComponent implements OnInit {
  pneusVehicleForm: FormGroup;
  isLoading = false;
  pneus: Pneu[];
  vehicles: Vehicle[];

  constructor(
    private pneuService: PneuService,
    private vehicleService: VehicleService,
    private pneusVehicleService: PneusVehicleService,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.pneusVehicleForm = new FormGroup({
      vehicle: new FormControl('', {
        validators: [Validators.required]
      }),

      eixoDianteiroEsquerdo: new FormControl('', {
        validators: [Validators.required]
      }),
      eixoDianteiroDireito: new FormControl('', {
        validators: [Validators.required]
      }),
      primeiroEsquerdoExterno: new FormControl('', {
        validators: [Validators.required]
      }),
      primeiroEsquerdoInterno: new FormControl('', {
        validators: [Validators.required]
      }),
      primeiroDireitoInterno: new FormControl('', {
        validators: [Validators.required]
      }),
      primeiroDireitoExterno: new FormControl('', {
        validators: [Validators.required]
      }),
      segundoEsquerdoExterno: new FormControl('', {
        validators: [Validators.required]
      }),
      segundoEsquerdoInterno: new FormControl('', {
        validators: [Validators.required]
      }),
      sedundoDireitoInterno: new FormControl('', {
        validators: [Validators.required]
      }),
      segundoDireitoExterno: new FormControl('', {
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
      });
  }

  onSubmit() {
    this.isLoading = true;
    console.log(this.pneusVehicleForm.value);
    this.pneusVehicleService.save(this.pneusVehicleForm.value)
      .subscribe( res => {
        this.uiService.showSnackBar('Dados gravados com sucesso!', 3000);
        console.log(res);
        this.isLoading = false;
      }, error => {
        this.uiService.showSnackBar('Erro, tente novamente mais tarde!', 3000);
      });
  }

}
