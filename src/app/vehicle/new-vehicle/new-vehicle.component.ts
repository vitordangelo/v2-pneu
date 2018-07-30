import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { VehicleService } from './../../services/vehicle.service';
import { UiService } from '../../services/ui.service';
import { Vehicle } from '../../modules/vehicle';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  newVehicleForm: FormGroup;
  isLoading = false;
  isUpdate = false;
  idVehicle: number;

  constructor(
    private vehicleService: VehicleService,
    private uiService: UiService,
    private route: ActivatedRoute
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

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.idVehicle = id;
      if (id) {
        this.isLoading = true;
        this.isUpdate = true;
        this.vehicleService.one(id)
          .subscribe((vehicle: Vehicle) => {
            delete vehicle.id;
            this.newVehicleForm.setValue(vehicle);
            this.isLoading = false;
          });
      }
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
