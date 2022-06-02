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

getPediatras():void{
  this.medicosService.getMedicos().subscribe(med=>{
    this.trabajador = med
    let me: Medicos
    for (let medi of this.trabajador){
      me = new Medicos(medi._id, medi._nombre, medi._apellido, medi._contacto, medi._sueldo, medi.puesto, medi._especialidad)
      this.medicos.push(me)
    }
    
  })
}

getMedicos(): void
{
  this.medicosService.getMedicos().subscribe(med=>{
    this.trabajador = med
    let me: Medicos
    for (let medi of this.trabajador){
      me = new Medicos(medi._id, medi._nombre, medi._apellido, medi._contacto, medi._sueldo, medi.puesto, medi._especialidad)
      console.log(`${me.nombre}, ${me.salario()}`)
      this.medicos.push(me)
    }
    console.log(this.medicos)
  })
}  

ngOnInit() {
  this.getMedicos()
  }
}