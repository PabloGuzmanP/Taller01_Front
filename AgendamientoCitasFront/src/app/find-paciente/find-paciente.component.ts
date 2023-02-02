import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BuscarService } from '../buscar/buscar.service';
import { Paciente } from '../Pacientes/models/paciente';
import { FindPacienteService } from './find-paciente.service';

@Component({
  selector: 'app-find-paciente',
  templateUrl: './find-paciente.component.html',
  styleUrls: ['./find-paciente.component.css']
})
export class FindPacienteComponent implements OnInit {

  searchForm = this.formBuilder.group({
    busqueda: ''
  });

  public result = <Paciente[]>[];
  public allPacientes = <Paciente[]>[];

  constructor(private formBuilder: FormBuilder,
    private findpacienteService: FindPacienteService,
    private buscarService: BuscarService) { }

  ngOnInit(): void {
    this.buscarService.getAllPacientes().subscribe(
      data => {
        console.log(data);
        this.allPacientes = data
      }
    );
  }

  buscar(): void {
    console.log('busqueda:', this.searchForm.value.busqueda)
    let busc: string;
    busc = ''+this.searchForm.value.busqueda;

    this.result = this.allPacientes.filter(element => element.nombre.includes(busc))
  }
}
