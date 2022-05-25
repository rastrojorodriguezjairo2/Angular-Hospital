import {Pacientes} from "./pacientes";

export class Urgencias extends Pacientes {
    private _pruebas: Array<String>;
    constructor (id: number, nombre:string, apellido1: string, apellido2: string, edad: number, dni: string, telefono:number, medico: string, urgencia:string, tipo: string, pruebas: Array<string>){
    super (id, nombre, apellido1, apellido2, edad, dni, telefono, medico, urgencia, tipo)
    this._pruebas = pruebas
    }
    get pruebas(){
        return this._pruebas
    }
    get urgencia(){
        return this._urgencia
    }
} 