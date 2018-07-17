import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { Vehicle } from './../modules/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  all(): any {
    return this.httpClient.get(`${environment.apiUrl}vehicles`);
  }

  save(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.post<Vehicle>(`${environment.apiUrl}vehicle`, vehicle);
  }

  del(id: number): Observable<{}> {
    return this.httpClient.delete(`${environment.apiUrl}vehicle/${id}`);
  }

  one(id: number): Observable<{}> {
    return this.httpClient.get(`${environment.apiUrl}vehicle/${id}`);
  }

  update(id: number, vehicle: Vehicle): Observable<{}> {
    return this.httpClient.put<Vehicle>(`${environment.apiUrl}vehicle/${id}`, vehicle);
  }
}
