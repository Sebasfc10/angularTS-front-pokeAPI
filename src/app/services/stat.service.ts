import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stat } from '../interfaces/stat';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getStats(): Observable<Stat[]>{
    return this.http.get<Stat[]>(`${this.BASE_URL}/stat`);
  }

  getStat(id: string): Observable<Stat>{
    return this.http.get<Stat>(`${this.BASE_URL}/stat/${id}`)
  }

  createStat(stat: Stat): Observable<Stat>{
    return this.http.post<Stat>(`${this.BASE_URL}/stat/create/`, stat);
  }

  deleteStat(id: string): Observable<Stat>{
    return this.http.delete<Stat>(`${this.BASE_URL}/stat/delete/?statID=${id}`);
  }

  updateStat(id: any, stat: Stat): Observable<Stat>{
    return this.http.put<Stat>(`${this.BASE_URL}/stat/update?statID=${id}`, stat);
  }

}
