import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.service';
import { Location } from "@angular/common";
import { Medicos } from 'src/app/modelos/medicos';

@Component({
  selector: 'app-empleados',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css'],
  providers: [EmpleadosService]
})

export class MedicosComponent implements OnInit {
  trabajador: any = [];
  medicos: Medicos[] = []
  
  constructor(
    private medicosService: EmpleadosService,
    private location: Location
  ){}
 
deleteempleado(id:number){
 this.medicosService.deleteempleado(id).subscribe(() => {
   console.log('Eliminado')
 })
}

getMedicos(): void
{
  this.medicosService.getMedicos().subscribe(med=>{
    this.trabajador = med
    let tempO: Medicos
    for (let medi of this.trabajador){
      tempO = new Medicos(medi._id, medi._nombre, medi._apellido, medi._contacto, medi._sueldo, medi.puesto, medi._especialidad)
      console.log(`${tempO.nombre}, ${tempO.salario()}`)
      this.medicos.push(tempO)
    }
    console.log(this.medicos)
  })
}  

ngOnInit() {
  this.getMedicos()
  }
}