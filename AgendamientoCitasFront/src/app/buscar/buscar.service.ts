import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../Pacientes/models/paciente';

@Injectable({
    providedIn: 'root'
})

export class BuscarService {
    constructor(private http: HttpClient){}

    getAllPacientes(): Observable<any>{
        const headers = new HttpHeaders ({})

        const body = JSON.stringify({})

        return this.http.get<Paciente>("http://localhost:8080/citas/pacientes", {headers: headers})
    }
}