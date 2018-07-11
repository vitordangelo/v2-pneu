import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  newVehicleForm: FormGroup;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.newVehicleForm = new FormGroup({
      numberCar: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.newVehicleForm.value);
  }

}
