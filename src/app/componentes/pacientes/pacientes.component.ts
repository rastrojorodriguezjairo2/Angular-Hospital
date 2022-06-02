import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';
import { Pacientes } from 'src/app/modelos/pacientes';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
  providers: [PacientesService]
})
export class PacientesComponent implements OnInit {
atendido: any = [];
  constructor(
    private pacientesService: PacientesService,
  ){}
 
  getPacientes(): void
  {
    this.pacientesService.getPacientes().subscribe(e=>{
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
        console.log(`${this.atendido.contcovid()}, ${this.atendido.conturgen()}`)
      })
  }
  
  newPacientes(): void{
  
  }
  
  deletepaciente(): void{
    this.pacientesService.getPacientes().subscribe(e=>{
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
  }  ngOnInit() {
    this.pacientesService.getPacientes()
    .subscribe(
      res=> {
        this.atendido= res;
      },
      err=> console.error(err)
    );
  }
}