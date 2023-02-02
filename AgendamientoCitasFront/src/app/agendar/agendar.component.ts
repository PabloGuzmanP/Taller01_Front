import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendarServices } from './agendar.service';


@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit{
  pacienteForm = this.formBuilder.group({
    cedula: '',
    nombre: '',
    apellido:'',
    edad: '',
    fecha:'',
    hora:''
  })
  constructor(private agendarService: AgendarServices,
    private formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    let pacienteCedula: string;
    let pacienteNombre: string;
    let pacienteApellido: string;
    let pacienteEdad: string;
    let pacienteFecha: string;
    let pacienteHora: string;

    pacienteCedula=''+this.pacienteForm.value.cedula;
    pacienteNombre=''+this.pacienteForm.value.nombre;
    pacienteApellido=''+this.pacienteForm.value.apellido;
    pacienteEdad=''+this.pacienteForm.value.edad;
    pacienteFecha=''+this.pacienteForm.value.fecha;
    pacienteHora=''+this.pacienteForm.value.hora;

    this.agendarService.crearPaciente(pacienteCedula,pacienteNombre,pacienteApellido,pacienteEdad,pacienteFecha,pacienteHora).subscribe(data => {console.log(data)})

    // this.pacienteForm.reset();
  }
}
