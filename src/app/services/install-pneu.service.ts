import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { PneuInstall } from './../modules/pneu-install';

@Injectable({
  providedIn: 'root'
})
export class InstallPneuService {

  constructor(private httpClient: HttpClient) { }

  save(pneuInstall: PneuInstall): Observable<PneuInstall> {
    return this.httpClient.post<PneuInstall>(`${environment.apiUrl}pneus_instaled`, pneuInstall);
  }
}
