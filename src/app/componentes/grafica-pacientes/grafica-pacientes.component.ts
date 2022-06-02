import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { Pacientes } from 'src/app/modelos/pacientes';
import { PacientesService } from 'src/app/servicios/pacientes.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './grafica-pacientes.component.html',
  styleUrls: ['./grafica-pacientes.component.css']
})
export class GraficaPacientesComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Total de Pacientes'
  },
  
  tooltip: {
      pointFormat: '{series.name}: {point.y}'
  },
  
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series:[{
    name: 'Pacientes',
    colorByPoint: true,
    data:[{
      name: 'Covid',
      y: 37,
      color: "red",
    },{
      name:'Urgencias',
      y: 23,
      color: "green"
    }
  ]
  }]
}
  atendido: any = [];
  paci: any;
  pacientes:Pacientes[] = [];
  constructor(
    private totalpacientes: PacientesService,
  ) { }

  ngOnInit(): void {
   //this.getpacientes();
  }

  
/*
  getpacientes(){
      this.totalpacientes.getPacientes().subscribe(atendido=>{
        this.paci = atendido;
        for (let pac of this.paci){
          let p = new Pacientes(pac._id, pac._nombre, pac._apellido1, pac._apellido2, pac._edad, pac._dni, pac._telefono, pac._medico, pac._urgencia, pac._tipo);
          this.atendido.push(p);
        }
        let grafico = this.atendido;
        this.chartOptions.series[0].data[0].y = grafico.map((x: Pacientes)=> x.contcovid());
        this.chartOptions.series[0].data[1].y = grafico.map((x: Pacientes)=> x.conturgen());
        console.log(this.chartOptions.series[0].data[0].y);
        console.log(this.chartOptions.series[0].data[1].y);
        Highcharts.chart("grafico", this.chartOptions);
      }
      )
  }*/
}
