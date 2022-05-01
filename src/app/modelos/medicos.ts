import {Empleados} from "./empleados";

export class Medicos extends Empleados {
    private _especialidad: string;
    constructor (id: number, nombre:string, apellido: string, contacto: number, sueldo: number, puesto: string, especialidad: string,){
    super (id, nombre, apellido, contacto, sueldo, puesto)
    this._especialidad = especialidad
    }
    get especialidad () {
        return this._especialidad
    }
    override get sueldo () {
        return this._sueldo
    }
    override salario(): number {
        let _salario : number;
        _salario = super.sueldo;
        if (this._especialidad == "Pediatría"){
            _salario = 900 + _salario
        } else if (this._especialidad == "Traumatología"){
            _salario = 950 + _salario
        } else if (this._especialidad == "Neurología"){
            _salario = 1000 + _salario
        } else if (this._especialidad == "Cardiología"){
            _salario = 1050 + _salario
        } else if (this._especialidad == "Radiología"){
            _salario = 850 + _salario
        } else if (this._especialidad == "Ginecología"){
            _salario = 1100 + _salario
        } else if (this._especialidad == "Oftalmología"){
            _salario = 975 + _salario
        } else if (this._especialidad == "Medicina Interna"){
            _salario = 899 + _salario
        } else {
            _salario == 1000
        }
        return _salario
    }
}