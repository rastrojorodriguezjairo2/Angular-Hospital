export class Pacientes {
    private _id: number;
    private _nombre: string;
    private _apellido1: string;
    private _apellido2: string;
    private _edad: number;
    private _dni: string;
    private _telefono: number;
    private _medico: string;
    protected _urgencia: string;
    private _tipo: string;
    constructor(id: number, nombre: string, apellido1: string, apellido2: string, edad: number, dni: string, telefono: number, medico: string, urgencia: string, tipo: string, ){
        this._id=id;
        this._nombre=nombre;
        this._apellido1=apellido1;
        this._apellido2=apellido2;
        this._edad=edad;
        this._dni=dni;
        this._telefono=telefono;
        this._medico=medico;
        this._urgencia=urgencia;
        this._tipo=tipo;
    }
    get id(){
        return this._id
    }
    get nombre(){
        return this._nombre
    }
    get apellido1(){
        return this._apellido1
    }
    get apellido2(){
        return this._apellido2
    }
    get edad(){
        return this._edad
    }
    get dni(){
        return this._dni
    }
    get telefono(){
        return this._telefono
    }
    get medico(){
        return this._urgencia
    }
    get tipo(){
        return this._tipo
    }
    todo() {
        return `Id: ${this._id}, Nombre: ${this._nombre}, Primer apellido: ${this._apellido1}, Segundo Apellido: ${this._apellido2}, Edad: ${this._edad}, DNI: ${this._dni}, Telefono: ${this._telefono}, Medico: ${this._medico}, Urgencia: ${this._urgencia}, Tipo: ${this._tipo}`
    }
}