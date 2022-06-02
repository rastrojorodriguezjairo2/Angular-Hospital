import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})

export class CrearEmpleadosComponent implements OnInit {
  crearEmpleado: FormGroup;
  submitted = false;
  id: string | null
  titulo = 'Crear Empleado'
  constructor(
    private fb: FormBuilder,
    private empleadosService: EmpleadosService,
    private activeRoute: ActivatedRoute) {
      this.crearEmpleado = this.fb.group({
        id: ['',Validators.required],
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        contacto: ['',Validators.required],
        sueldo: ['',Validators.required],
        puesto: ['',Validators.required],
        especialidad: ['',Validators.required],
        idiomas: ['',Validators.required]
      })
      this.id = this.activeRoute.snapshot.paramMap.get("id")
     }

  ngOnInit(): void {
  }

  newEmpleado(){
    this.submitted = true
    if (this.crearEmpleado.invalid) {
      return;
    }
    const empleado: any = {
      id: this.crearEmpleado.value.id,
      nombre: this.crearEmpleado.value.nombre,
      apellido: this.crearEmpleado.value.apellido,
      contacto: this.crearEmpleado.value.contacto,
      sueldo: this.crearEmpleado.value.sueldo,
      puesto: this.crearEmpleado.value.puesto,
      especialidad: this.crearEmpleado.value.especialidad,
      idiomas: this.crearEmpleado.value.idiomas
    }
    this.empleadosService.newEmpleado(empleado).subscribe(
      ()=>{
        console.log(empleado)
        console.log("Se ha creado correctamente")
      }
    ), (error: any)=> {
      console.log(error);
    }
  }
}