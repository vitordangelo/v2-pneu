import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { Pneu } from './../modules/pneu';
import { InstallUninstallPneu } from './../modules/install-uninstall-pneu';

@Injectable({
  providedIn: 'root'
})
export class PneuService {

  constructor(private httpClient: HttpClient) { }

  all(): any {
    return this.httpClient.get(`${environment.apiUrl}pneus`);
  }

  save(pneu: Pneu): Observable<Pneu> {
    return this.httpClient.post<Pneu>(`${environment.apiUrl}pneu`, pneu);
  }

  del(id: number): Observable<{}> {
    return this.httpClient.delete(`${environment.apiUrl}pneu/${id}`);
  }

  one(id: number): Observable<{}> {
    return this.httpClient.get(`${environment.apiUrl}pneu/${id}`);
  }

  update(id: number, pneu: Pneu): Observable<{}> {
    return this.httpClient.put<Pneu>(`${environment.apiUrl}pneu/${id}`, pneu);
  }

  istallUninstall(id: number, isInstaled: InstallUninstallPneu): Observable<{}> {
    return this.httpClient.put<InstallUninstallPneu>(`${environment.apiUrl}pneu/install-uninstall/${id}`, isInstaled);
  }
}
