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
        _id: ['',Validators.required],
        _nombre: ['',Validators.required],
        _apellido1: ['',Validators.required],
        _apellido2: ['',Validators.required],
        _edad: ['',Validators.required],
        _dni: ['',Validators.required],
        _telefono: ['',Validators.required],
        _medico: ['',Validators.required],
        _urgencia: ['',Validators.required],
        _tipo: ['',Validators.required],
        _pruebas: ['',Validators.required],
        _test: ['',Validators.required],
      })
      this.id = this.activeRoute.snapshot.paramMap.get("id")
     }

  ngOnInit(): void {
    
  }
  newPacientes():void{
    this.submitted = true
    if (this.crearPaciente.invalid) {
      return;
    }
    const paciente: any = {
      id: this.crearPaciente.value._id,
      nombre: this.crearPaciente.value._nombre,
      apellido1: this.crearPaciente.value._apellido1,
      apellido2: this.crearPaciente.value._apellido2,
      edad: this.crearPaciente.value._edad,
      dni: this.crearPaciente.value._dni,
      telefono: this.crearPaciente.value._telefono,
      medico: this.crearPaciente.value._medico,
      urgencia: this.crearPaciente.value._urgencia,
      tipo: this.crearPaciente.value._tipo,
      pruebas: this.crearPaciente.value._pruebas,
      test: this.crearPaciente.value._test,
    }
  }

}