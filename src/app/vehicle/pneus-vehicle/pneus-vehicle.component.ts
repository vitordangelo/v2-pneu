import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PneuService } from './../../services/pneu.service';
import { VehicleService } from '../../services/vehicle.service';

import { Pneu } from '../../modules/pneu';
import { Vehicle } from './../../modules/vehicle';

@Component({
  selector: 'app-pneus-vehicle',
  templateUrl: './pneus-vehicle.component.html',
  styleUrls: ['./pneus-vehicle.component.css']
})
export class PneusVehicleComponent implements OnInit {
  pneusVehicle: FormGroup;
  isLoading = false;
  pneus: Pneu[];
  vehicles: Vehicle[];

  constructor(
    private pneuService: PneuService,
    private vehicleSerive: VehicleService
  ) { }

  ngOnInit() {
    this.pneusVehicle = new FormGroup({
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

    this.vehicleSerive.all()
      .subscribe((vehicles: any) => {
        this.vehicles = vehicles.vehicles;
      });
  }

  onSubmit() {
    console.log(this.pneusVehicle.value);
  }

}
