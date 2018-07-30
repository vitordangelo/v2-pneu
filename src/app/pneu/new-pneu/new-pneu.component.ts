import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PneuService } from './../../services/pneu.service';
import { UiService } from '../../services/ui.service';
import { Pneu } from '../../modules/pneu';

@Component({
  selector: 'app-new-pneu',
  templateUrl: './new-pneu.component.html',
  styleUrls: ['./new-pneu.component.css']
})
export class NewPneuComponent implements OnInit {
  newPneuForm: FormGroup;
  isLoading = false;
  isUpdate = false;
  idPneu: number;

  constructor(
    private pneuService: PneuService,
    private uiService: UiService,
    private route: ActivatedRoute
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

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.idPneu = id;
      if (id) {
        this.isLoading = true;
        this.isUpdate = true;
        this.pneuService.one(id)
          .subscribe((pneu: Pneu) => {
            delete pneu.id;
            delete pneu.is_installed;
            this.newPneuForm.setValue(pneu);
            this.isLoading = false;
          });
      }
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

  onUpdate(pneu: Pneu) {
    this.isLoading = true;
    this.pneuService.update(this.idPneu, pneu)
      .subscribe(res => {
        this.isLoading = false;
        this.uiService.showSnackBar('Pneu atualizado com sucesso', 3000);
      }, error => {
        this.uiService.showSnackBar('Erro ao atualizar, tente mais tarde', 3000);
        console.error(error);
      });
  }

}
