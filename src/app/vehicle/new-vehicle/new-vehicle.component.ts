import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { VehicleService } from './../../services/vehicle.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  newVehicleForm: FormGroup;
  isLoading = false;

  constructor(
    private vehicleService: VehicleService,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.newVehicleForm = new FormGroup({
      number_car: new FormControl('', {
        validators: [Validators.required]
      }),
      brand: new FormControl('', {
        validators: [Validators.required]
      }),
      type: new FormControl('', {
        validators: [Validators.required]
      }),
      year: new FormControl('', {
        validators: [Validators.required]
      }),
      plate: new FormControl('', {
        validators: [Validators.required]
      }),
    });
  }

  onSubmit() {
    console.log(this.newVehicleForm.value);
    this.vehicleService.save(this.newVehicleForm.value)
      .subscribe(res => {
        console.log(res);
        this.uiService.showSnackBar('Veículo cadastrado com sucesso!', 5000);
        this.newVehicleForm.reset();
      }, error => {
        console.log(error);
        this.uiService.showSnackBar('Erro durante o cadastro, tente novamente mais tarde!', 3000);
      });
  }

}
