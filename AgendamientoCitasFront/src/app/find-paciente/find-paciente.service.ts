import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../Pacientes/models/paciente';

@Injectable({
    providedIn: 'root'
})

export class FindPacienteService {

    constructor(private http: HttpClient) { }

    buscarPaciente(fecha: string): Observable<any>{
        const headers = new HttpHeaders({})
        const body = JSON.stringify({})
        return this.http.get<Paciente>("http://localhost:8080/citas/"+fecha);
    }
}