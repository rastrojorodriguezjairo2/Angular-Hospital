import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Empleados } from 'src/app/modelos/empleados';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-detalles-empleados',
  templateUrl: './detalles-empleados.component.html',
  styleUrls: ['./detalles-empleados.component.css'],
  providers: [EmpleadosService]
})
export class DetallesEmpleadosComponent implements OnInit {
  emplea: any = [];
  constructor(
    private detallempleado: EmpleadosService,
    private location: Location
  ) {}

  ngOnInit() {
    this.detallempleado.getEmpleados()
    .subscribe(
      res=> {
        this.emplea= res;
      },
      err=> console.error(err)
    );
  }
  
  getEmpleados(): void{
    this.detallempleado.getEmpleados().subscribe(e=>{
      this.emplea=new Empleados(
        this.emplea._id,
        this.emplea._nombre,
        this.emplea._apellido,
        this.emplea._contacto,
        this.emplea._sueldo,
        this.emplea._puesto
      )
    })
  }  

}
