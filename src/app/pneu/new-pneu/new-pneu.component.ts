import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PneuService } from './../../services/pneu.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-new-pneu',
  templateUrl: './new-pneu.component.html',
  styleUrls: ['./new-pneu.component.css']
})
export class NewPneuComponent implements OnInit {
  newPneuForm: FormGroup;
  isLoading = false;

  constructor(
    private pneuService: PneuService,
    private uiService: UiService
  ) { }

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
      number: new FormControl('', {
        validators: [Validators.required]
      }),
      registry: new FormControl('', {
        validators: [Validators.required]
      }),
      new: new FormControl(''),
      recachutado: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.newPneuForm.value);
    this.pneuService.save(this.newPneuForm.value)
      .subscribe(res => {
        console.log(res);
        this.uiService.showSnackBar('Pneu cadastrado com sucesso!', 5000);
        this.newPneuForm.reset();
      }, error => {
        console.log(error);
        this.uiService.showSnackBar('Erro durante o cadastro, tente novamente mais tarde!', 3000);
      });
  }

  newBoxClicked() {
    this.newPneuForm.patchValue({ recachutado: !this.newPneuForm.value.new });
  }

  recachutadoClicked() {
    this.newPneuForm.patchValue({ new: !this.newPneuForm.value.recachutado });
  }

}
