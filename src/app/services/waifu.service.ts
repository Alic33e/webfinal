import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaifuService {
  private apiUrl = 'https://api.waifu.pics';
  private newApiUrl = 'https://6671d45ae083e62ee43d3cfa.mockapi.io/api/v1/servicios';

  constructor(private http: HttpClient) { }

  getWaifuData(type: string, category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${type}/${category}`);
  }

  getServiciosData(): Observable<any> {
    return this.http.get<any>(this.newApiUrl);
  }
}
