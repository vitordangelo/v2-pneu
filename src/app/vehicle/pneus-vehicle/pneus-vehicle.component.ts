import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pneus-vehicle',
  templateUrl: './pneus-vehicle.component.html',
  styleUrls: ['./pneus-vehicle.component.css']
})
export class PneusVehicleComponent implements OnInit {
  pneusVehicle: FormGroup;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.pneusVehicle = new FormGroup({
      exitedEd: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.pneusVehicle.value);
  }

}
