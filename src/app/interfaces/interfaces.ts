import { StaticClassProvider } from "@angular/core";

export interface Empleado {
    _id: number;
    _nombre: string;
    _apellido: string;
    _contacto: number;
    _sueldo: number;
    _especialidad: string;
    _idiomas: Array<string>;
}

export interface Paciente {
    _id: number;
    _nombre: string;
    _apellido1: string;
    _apellido2: string;
    _edad: number;
    _dni: string;
    _telefono: number;
    _medico: string;
    _urgencia: string;
    _tipo: string;
    _prueba: Array<string>;
    _test: string;
}

export interface medico{
    _id: number;
    _nombre: string;
    _apellido: string;
    _contacto: number;
    _sueldo: number;
    _puesto: string;
    _especialidad: string;
    _salario: number;
}

export interface administrativo{
    _id: number;
    _nombre: string;
    _apellido: string;
    _contacto: number;
    _sueldo: number;
    _puesto: string;
    _idiomas: string;
    _salario: number;
}