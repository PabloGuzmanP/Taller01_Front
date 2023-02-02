import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, tap } from 'rxjs'
import { Paciente } from '../Pacientes/models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  
  private pacientesUrl = "http://localhost:8080/citas";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }
  
  getPacientes(): Observable<any> {
    return this.http.get(this.pacientesUrl+"/pacientes");
  }
  addPacientes(paciente: Paciente): Observable<any> {
    return this.http.post<any>(this.pacientesUrl, JSON.stringify(paciente),this.httpOptions);
  }
     
}
