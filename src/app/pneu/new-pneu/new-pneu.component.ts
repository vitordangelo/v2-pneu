import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-pneu',
  templateUrl: './new-pneu.component.html',
  styleUrls: ['./new-pneu.component.css']
})
export class NewPneuComponent implements OnInit {
  newPneuForm: FormGroup;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.newPneuForm = new FormGroup({
      dimension: new FormControl('', {
        validators: [Validators.required]
      }),
      brand: new FormControl('', {
        validators: [Validators.required]
      }),
      pr: new FormControl('', {
        validators: [Validators.required]
      }),
      type: new FormControl('', {
        validators: [Validators.required]
      }),
      numberFire: new FormControl('', {
        validators: [Validators.required]
      }),
      registration: new FormControl('', {
        validators: [Validators.required]
      }),
      new: new FormControl(''),
      recachutado: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.newPneuForm.value);
  }

  newBoxClicked() {
    this.newPneuForm.patchValue({ recachutado: !this.newPneuForm.value.new });
  }

  recachutadoClicked() {
    this.newPneuForm.patchValue({ new: !this.newPneuForm.value.recachutado });
  }

}
