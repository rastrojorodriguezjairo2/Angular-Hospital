import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';
import { Location } from "@angular/common";
import { Urgencias } from 'src/app/modelos/urgencias';

@Component({
  selector: 'app-urgencias',
  templateUrl: './urgencias.component.html',
  styleUrls: ['./urgencias.component.css'],
  providers: [PacientesService]
})

export class UrgenciasComponent implements OnInit {
  atendido: any = [];
  PacienteUrg: Urgencias[] = []

  constructor(
    private urgenciaservice: PacientesService,
    private location: Location
  ){}

  deletepaciente(id:number){
    this.urgenciaservice.deletepaciente(id).subscribe(() => {
      console.log('Eliminado')
    })
   }

   getCovid(): void
  {
    this.urgenciaservice.getUrgencias().subscribe(urg=>{
      this.atendido = urg
      let urgen56: Urgencias
      for (let urge of this.atendido){
        urgen56 = new Urgencias(urge._id, urge._nombre, urge._apellido1, urge._apellido2, urge._edad,
        urge._dni, urge._medico, urge._telefono, urge._urgencia, urge._tipo, urge._pruebas)
        this.PacienteUrg.push(urgen56)
      }
      console.log(this.PacienteUrg)
    })
  }  

  ngOnInit() {
    this.getCovid()
  }
}
