import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';
import {Paciente} from '../../interfaces/interfaces';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Pacientes } from 'src/app/modelos/pacientes';
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  atendido:any =[];
  constructor(
    private pacienteService: PacientesService,
    private location: Location
  ) {}
  getPacientes(): void
  {
   this.pacienteService.getPacientes().subscribe(e=>{
     this.atendido=new Pacientes(
      this.atendido._id,
      this.atendido._nombre,
      this.atendido._apellido1,
      this.atendido._apellido2,
      this.atendido._edad,
      this.atendido._dni,
      this.atendido._medico,
      this.atendido._telefono,
      this.atendido._urgencia,
      this.atendido._tipo,
     )
   })
  }  ngOnInit(): void {
     this.pacienteService.getPacientes()
     .subscribe(
       res=> {
         this.atendido= res;
       },
       err=> console.error(err)
     );
  }
}
