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
        _id: ['',Validators.required],
        _nombre: ['',Validators.required],
        _apellido: ['',Validators.required],
        _contacto: ['',Validators.required],
        _sueldo: ['',Validators.required],
        _puesto: ['',Validators.required],
        _especialidad: ['',Validators.required],
        _idiomas: ['',Validators.required]
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
      id: this.crearEmpleado.value._id,
      nombre: this.crearEmpleado.value._nombre,
      apellido: this.crearEmpleado.value._apellido,
      contacto: this.crearEmpleado.value._contacto,
      sueldo: this.crearEmpleado.value._sueldo,
      puesto: this.crearEmpleado.value._puesto,
      especialidad: this.crearEmpleado.value._especialidad,
      idiomas: this.crearEmpleado.value._idiomas
    }
    this.empleadosService.newEmpleado(empleado).subscribe(
      ()=>{
        console.log("Se ha creado correctamente")
      }
    ), (error: any)=> {
      console.log(error);
    }
  }

}
