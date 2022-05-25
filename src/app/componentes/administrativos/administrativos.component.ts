import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.service';
import {administrativo} from '../../interfaces/interfaces';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Administrativo } from 'src/app/modelos/administrativo';

@Component({
  selector: 'app-empleados',
  templateUrl: './administrativos.component.html',
  styleUrls: ['./administrativos.component.css']
})
export class AdministrativoComponent implements OnInit {
trabajador: any = [];
admin: Administrativo[] = []
  constructor(
    private administrativosService: EmpleadosService,
    private location: Location
  ){}



  deleteempleado(id:number){
    this.administrativosService.deleteempleado(id).subscribe(() => {
      console.log('Eliminado')
    })
   }

getAdministrativos(): void
{
  this.administrativosService.getAdministrativos().subscribe(ad=>{
    this.trabajador = ad
    let tempO: Administrativo
    for (let adm of this.trabajador){
      tempO = new Administrativo(adm._id, adm._nombre, adm._apellido, adm._contacto, adm._sueldo, adm.puesto, adm._idiomas)
      console.log(`${tempO.nombre}, ${tempO.salario()}`)
      this.admin.push(tempO)
    }
    console.log(this.admin)
  })
  
}  



ngOnInit() {
  this.getAdministrativos()
  }
}
