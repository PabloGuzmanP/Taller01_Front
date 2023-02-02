import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Paciente } from '../Pacientes/models/paciente';
import { BuscarService } from './buscar.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  pacientes= <Paciente[]>[];

  constructor(private buscarService: BuscarService,
    private formBuilder: FormBuilder){
  }

  ngOnInit(): void {  
    this.fillPacientes();
  }

  fillPacientes(){
    this.buscarService.getAllPacientes().subscribe(
      data =>{console.log(data);
              this.pacientes = data}
    );
  }
}
