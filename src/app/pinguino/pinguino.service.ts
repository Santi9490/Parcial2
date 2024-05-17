import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Pinguino } from './pinguino';

@Injectable({
  providedIn: 'root'
})
export class PinguinoService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPinguinos(): Observable<Pinguino[]> {
    return this.http.get<Pinguino[]>(this.apiUrl);
  } 

  

  
}