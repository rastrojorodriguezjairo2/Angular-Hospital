import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.service';
import { Location } from "@angular/common";
import { Empleados } from '../../modelos/empleados';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadosService]
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
      this.trabajador._nombre,
      this.trabajador._apellido,
      this.trabajador._contacto,
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
