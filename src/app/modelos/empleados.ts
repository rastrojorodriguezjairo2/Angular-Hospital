export  class  Empleados {
    private _id: number;
    private _nombre: string;
    private _apellido: string;
    private _contacto: number;
    protected _sueldo: number;
    private _puesto: string;
    constructor(id: number, nombre:string, apellido: string, contacto: number, sueldo: number, puesto: string){
        this._id=id;
        this._nombre=nombre;
        this._apellido=apellido;
        this._contacto=contacto;
        this._sueldo=sueldo;
        this._puesto=puesto
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get contacto(){
        return this._contacto;
    }
    get sueldo(){
        return this._sueldo;
    }
    get puesto(){
        return this._puesto;
    }
    salario(){
        let salario : number;
        salario = this._sueldo;
        salario = 1000;
    }
    todo(){
        return `Id: ${this._id}, Nombre: ${this._nombre}, Apellido: ${this._apellido}, Contacto: ${this._contacto}, Sueldo: ${this._sueldo}, Tipo: ${this._puesto}`
    }
}