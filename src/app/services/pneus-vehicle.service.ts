import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { PneusVehicle } from './../modules/pneus-vehicle';

@Injectable({
  providedIn: 'root'
})
export class PneusVehicleService {

  constructor(private httpClient: HttpClient) { }

  all(): any {
    return this.httpClient.get(`${environment.apiUrl}pneus-in-vehicle`);
  }

  save(pneusVehicle: PneusVehicle): Observable<PneusVehicle> {
    return this.httpClient.post<PneusVehicle>(`${environment.apiUrl}pneus-in-vehicle`, pneusVehicle);
  }

  del(id: number): Observable<{}> {
    return this.httpClient.delete(`${environment.apiUrl}pneus-in-vehicle/${id}`);
  }

  one(id: number): Observable<{}> {
    return this.httpClient.get(`${environment.apiUrl}pneus-in-vehicle/${id}`);
  }

  update(id: number, pneusVehicle: PneusVehicle): Observable<{}> {
    return this.httpClient.put<PneusVehicle>(`${environment.apiUrl}pneus-in-vehicle/${id}`,
      pneusVehicle);
  }
}
