import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-history-pneu',
  templateUrl: './history-pneu.component.html',
  styleUrls: ['./history-pneu.component.css']
})
export class HistoryPneuComponent implements OnInit {
  historyPneuForm: FormGroup;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.historyPneuForm = new FormGroup({
      pneu: new FormControl('', {
        validators: [Validators.required]
      }),
      position: new FormControl('', {
        validators: [Validators.required]
      }),
      vehicle: new FormControl('', {
        validators: [Validators.required]
      }),
      odometerInstallation: new FormControl('', {
        validators: [Validators.required]
      }),
      odometerUninstall: new FormControl('', {
        validators: [Validators.required]
      }),
      distance: new FormControl('', {
        validators: [Validators.required]
      }),
      recapagem: new FormControl('', {
        validators: [Validators.required]
      }),
      cause: new FormControl('', {
        validators: [Validators.required]
      }),
      obs: new FormControl('', {
        validators: [Validators.required]
      }),
    });
  }

  onSubmit() {
    console.log(this.historyPneuForm.value);
  }

}
