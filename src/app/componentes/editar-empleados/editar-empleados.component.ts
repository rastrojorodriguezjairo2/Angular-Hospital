import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Empleados } from 'src/app/modelos/empleados';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css']
})
export class EditarEmpleadosComponent implements OnInit {
  editarEmpleado: FormGroup;
  submitted = false;
  trabajador: any = [];
  titulo = 'Editar Empleado'

  constructor(
    private fb: FormBuilder,
    private empleadosService: EmpleadosService,
    private activeRoute: ActivatedRoute){
      this.editarEmpleado = this.fb.group({
         id: [this.activeRoute.snapshot.paramMap.get("id"), Validators.required],
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        contacto: ['',Validators.required],
        sueldo: ['',Validators.required],
        puesto: ['',Validators.required],
        especialidad: ['',Validators.required],
        idiomas: ['',Validators.required]
      })
    }

  ngOnInit(): void {
    this.getEmpleados()
  }
  
  getEmpleados(){
    const id = this.activeRoute.snapshot.paramMap.get("id");
    this.empleadosService.getEmpleados().subscribe(
      Empleados => {
        this.trabajador = Empleados
      }
    )
    
  }
  updateempleado(){
    const emple56: any ={
        id: this.editarEmpleado.value._id,
        nombre: this.editarEmpleado.value._nombre,
        apellido: this.editarEmpleado.value._apellido,
        contacto: this.editarEmpleado.value._contacto,
        sueldo: this.editarEmpleado.value._sueldo,
        puesto: this.editarEmpleado.value.puesto,
        especialidad: this.editarEmpleado.value._especialidad,
        idiomas: this.editarEmpleado.value._idiomas
    }
    this.empleadosService.updateempleado;
    this.activeRoute.snapshot.paramMap.get("id"),emple56;
  }
}
