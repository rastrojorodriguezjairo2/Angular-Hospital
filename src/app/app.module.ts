import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    EmpleadosComponent,
    AdministrativoComponent,
    PacientesComponent,
    CovidComponent,
    UrgenciasComponent,
    InicioComponent,
    CrearEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmpleadosService, PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
