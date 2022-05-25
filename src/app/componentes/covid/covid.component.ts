import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';
import { Location } from "@angular/common";
import { Covid } from 'src/app/modelos/covid';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
  providers: [PacientesService]
})

export class CovidComponent implements OnInit {
  atendido: any = [];
  PacienteCo: Covid[] = []

  constructor(
    private covidService: PacientesService,
    private location: Location
  ){}

  deletepaciente(id:number){
    this.covidService.deletepaciente(id).subscribe(() => {
      console.log('Eliminado')
    })
   }

  getCovid(): void
  {
    this.covidService.getCovid().subscribe(cov=>{
      this.atendido = cov
      let cov19: Covid
      for (let covid19 of this.atendido){
        cov19 = new Covid(covid19._id, covid19._nombre, covid19._apellido1, covid19._apellido2, 
        covid19._edad, covid19._dni, covid19._medico, covid19._telefono, covid19._urgencia, covid19._tipo, covid19._test)   
        this.PacienteCo.push(cov19)
      }
      console.log(this.PacienteCo)
    })
  }  

  ngOnInit(): void {
    this.getCovid()
  }
}
