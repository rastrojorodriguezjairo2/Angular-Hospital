import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from 'src/app/servicios/pacientes.service';

@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-pacientes.component.html',
  styleUrls: ['./crear-pacientes.component.css']
})

export class CrearPacientesComponent implements OnInit {
  crearPaciente: FormGroup;
  submitted = false;
  id: string | null
  titulo = 'Crear Paciente'
  constructor(
    private fb: FormBuilder,
    private pacientesService: PacientesService,
    private activeRoute: ActivatedRoute) {
      this.crearPaciente = this.fb.group({
        id: ['',Validators.required],
        nombre: ['',Validators.required],
        apellido1: ['',Validators.required],
        apellido2: ['',Validators.required],
        edad: ['',Validators.required],
        dni: ['',Validators.required],
        telefono: ['',Validators.required],
        medico: ['',Validators.required],
        urgencia: ['',Validators.required],
        tipo: ['',Validators.required],
        pruebas: ['',Validators.required],
        test: ['',Validators.required],
      })
      this.id = this.activeRoute.snapshot.paramMap.get("id")
     }

  ngOnInit(): void {
  }

  newPacientes(){
    this.submitted = true
    if (this.crearPaciente.invalid) {
      return;
    }
    const paciente: any = {
      id: this.crearPaciente.value.id,
      nombre: this.crearPaciente.value.nombre,
      apellido1: this.crearPaciente.value.apellido1,
      apellido2: this.crearPaciente.value.apellido2,
      edad: this.crearPaciente.value.edad,
      dni: this.crearPaciente.value.dni,
      telefono: this.crearPaciente.value.telefono,
      medico: this.crearPaciente.value.medico,
      urgencia: this.crearPaciente.value.urgencia,
      tipo: this.crearPaciente.value.tipo,
      pruebas: this.crearPaciente.value.pruebas,
      test: this.crearPaciente.value.test,
    }
    this.pacientesService.newPacientes(paciente).subscribe(
      ()=>{
        console.log(paciente)
        console.log("Se ha creado correctamente")
      }
      ), (error: any)=> {
        console.log(error);
      }
    }
}