import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.service';
import {Empleado} from '../../interfaces/interfaces';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Empleados } from '../../modelos/empleados';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
trabajador: any = [];
  constructor(
    private empleadosService: EmpleadosService,
    private location: Location
  ){}
getEmpleados(): void{
  this.empleadosService.getEmpleados().subscribe(e=>{
    this.trabajador=new Empleados(
      this.trabajador._id,
      this.trabajador.nombre,
      this.trabajador.apellido,
      this.trabajador.contacto,
      this.trabajador._sueldo,
      this.trabajador._puesto
    )
  })
} 
newEmpleado(): void{
  
}
deleteempleado(): void{
  this.empleadosService.getEmpleados().subscribe(e=>{
    this.trabajador=new Empleados(
      this.trabajador._id,
      this.trabajador.nombre,
      this.trabajador.apellido,
      this.trabajador.contacto,
      this.trabajador._sueldo,
      this.trabajador._puesto
    )
  })
}

ngOnInit() {
    this.empleadosService.getEmpleados()
    .subscribe(
      res=> {
        this.trabajador= res;
      },
      err=> console.error(err)
    );
  }
}
