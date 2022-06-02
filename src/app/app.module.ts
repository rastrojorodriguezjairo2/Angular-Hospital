import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular-highcharts';
import { MedicosComponent } from './componentes/medicos/medicos.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { AdministrativoComponent } from './componentes/administrativos/administrativos.component';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { CovidComponent } from './componentes/covid/covid.component';
import { UrgenciasComponent } from './componentes/urgencias/urgencias.component';
import { PacientesService } from './servicios/pacientes.service';
import { EmpleadosService } from './servicios/empleados.service';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearEmpleadosComponent } from './componentes/crear-empleados/crear-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearPacientesComponent } from './componentes/crear-pacientes/crear-pacientes.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GraficaMedicosComponent } from './componentes/grafica-medicos/grafica-medicos.component';
import { GraficaPacientesComponent } from './componentes/grafica-pacientes/grafica-pacientes.component';
import {GoogleMapsModule} from '@angular/google-maps'

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    EmpleadosComponent,
    AdministrativoComponent,
    PacientesComponent,
    GraficaPacientesComponent,
    CovidComponent,
    UrgenciasComponent,
    InicioComponent,
    CrearEmpleadosComponent,
    CrearPacientesComponent,
    GraficasComponent,
    GraficaMedicosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChartModule,
    HighchartsChartModule,
    GoogleMapsModule
  ],
  providers: [EmpleadosService, PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }