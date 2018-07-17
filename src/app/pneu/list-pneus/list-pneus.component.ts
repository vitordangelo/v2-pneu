import { Component, OnInit } from '@angular/core';

import { Pneu } from './../../modules/pneu';
import { PneuService } from './../../services/pneu.service';

@Component({
  selector: 'app-list-pneus',
  templateUrl: './list-pneus.component.html',
  styleUrls: ['./list-pneus.component.css']
})
export class ListPneusComponent implements OnInit {

  constructor(private pneuService: PneuService) { }

  ngOnInit() {
    this.pneuService.all()
      .subscribe((pneus: Pneu[]) => {
        console.log(pneus);
      });
  }

}
