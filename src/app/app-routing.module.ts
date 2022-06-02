import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import {CovidComponent} from './componentes/covid/covid.component';
import {UrgenciasComponent} from './componentes/urgencias/urgencias.component';
import {AdministrativoComponent} from './componentes/administrativos/administrativos.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { MedicosComponent } from './componentes/medicos/medicos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { CrearEmpleadosComponent } from './componentes/crear-empleados/crear-empleados.component';
import { CrearPacientesComponent } from './componentes/crear-pacientes/crear-pacientes.component';
import { GraficaPacientesComponent } from './componentes/grafica-pacientes/grafica-pacientes.component';
import { GraficaMedicosComponent } from './componentes/grafica-medicos/grafica-medicos.component';

const routes: Routes = [
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'graficas', component: GraficasComponent},
  {path: 'covid', component: CovidComponent},
  {path: 'urgencias', component: UrgenciasComponent},
  {path: 'medicos', component: MedicosComponent},
  {path: 'grafica-pacientes', component: GraficaPacientesComponent},
  {path: 'grafica-medicos', component: GraficaMedicosComponent},
  {path: 'administrativos', component: AdministrativoComponent},
  {path: 'crear-empleados', component: CrearEmpleadosComponent},
  {path: 'crear-pacientes', component: CrearPacientesComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo:'inicio', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}