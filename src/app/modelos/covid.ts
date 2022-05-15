import {Pacientes} from "./pacientes";

export class Covid extends Pacientes {
    private _test: string
    constructor (id: number, nombre:string, apellido1: string, apellido2: string, edad: number, dni: string, telefono:number, medico: string, urgencia:string, tipo: string, test:
string){
    super (id, nombre, apellido1, apellido2, edad, dni, telefono, medico, urgencia, tipo)
    this._test = test
    }
    get test(){
        return this._test
    }
    get urgencia(){
        return this._urgencia
    }
} 