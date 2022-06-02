import {Empleados} from "./empleados";

export class Administrativo extends Empleados {
    private _idiomas: Array<string>;
    constructor (id: number, nombre:string, apellido: string, contacto: number, sueldo: number, puesto: string, idiomas: Array<string>){
    super (id, nombre, apellido, contacto, sueldo, puesto)
    this._idiomas = idiomas
    }
    get idiomas () {
        return this._idiomas
    }
    override get sueldo () {
        return this._sueldo
    }

    override salario(): number {
            let _salario : number
            _salario = super.sueldo;
            const contador = this.idiomas.length;
           if (contador==1){
           _salario = 100 + _salario
        } else if (contador==2){
            _salario = 200 + _salario
        } else if (contador>=3){
            _salario = 400 + _salario
        } else {
            _salario==1000
        }
           return _salario
    }
} 