import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { HistoryPneu } from './../modules/history-pneu';

@Injectable({
  providedIn: 'root'
})
export class HistoryPneusService {

  constructor(private httpClient: HttpClient) { }

  all(): any {
    return this.httpClient.get(`${environment.apiUrl}history-pneu`);
  }

  save(historyPneu: HistoryPneu): Observable<HistoryPneu> {
    return this.httpClient.post<HistoryPneu>(`${environment.apiUrl}history-pneu`, historyPneu);
  }

  del(id: number): Observable<{}> {
    return this.httpClient.delete(`${environment.apiUrl}history-pneu/${id}`);
  }

  one(id: number): Observable<{}> {
    return this.httpClient.get(`${environment.apiUrl}history-pneu/${id}`);
  }

  update(id: number, historyPneu: HistoryPneu): Observable<{}> {
    return this.httpClient.put<HistoryPneu>(`${environment.apiUrl}history-pneu/${id}`,
      historyPneu);
  }
}
