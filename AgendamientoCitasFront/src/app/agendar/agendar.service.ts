import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacientesService } from '../services/pacientes.service';

@Injectable({
  providedIn: 'root'
})

export class AgendarServices {
    constructor(private http: HttpClient,
        private service: PacientesService) { }
    
    crearPaciente(cedula: string, nombre: string, apellido: string, edad: string, fecha: string, hora: string) {
        const headers = new HttpHeaders({});
          const body = ({
            "cedula": cedula,
            "nombre": nombre,
            "apellido": apellido,
            "edad": edad,
            "fecha": fecha,
            "hora": hora
          })
          console.log(body)
    
          return this.http.post("http://localhost:8080/citas/agendar", body, {headers});
        }
}