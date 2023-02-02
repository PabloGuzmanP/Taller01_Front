import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarComponent } from './agendar/agendar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FindPacienteComponent } from './find-paciente/find-paciente.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pacientes', component: BuscarComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'fecha', component: FindPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
