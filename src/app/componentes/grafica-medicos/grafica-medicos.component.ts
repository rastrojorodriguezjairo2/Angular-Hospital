import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { Medicos } from 'src/app/modelos/medicos';
import { EmpleadosService } from 'src/app/servicios/empleados.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './grafica-medicos.component.html',
  styleUrls: ['./grafica-medicos.component.css']
})


export class GraficaMedicosComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any ={
    chart: {
      type: 'column'
    },
    title: {
      text:'Salarios por especialidad'
    },
    xAxis:{
      categories:['Especialidades']
    },
    credits:{
      enabled:false
    },
    series: [{
      name: 'Pediatría',
      data: [900],
      color: "blue"
    },
    {
      name: 'Traumatología',
      data: [950],
      color: "purple"
    },
    {
      name: 'Neurología',
      data: [1000],
      color: "yewllow"
    },
    {
      name: 'Cardiología',
      data: [1050],
      color: "red"
    },
    {
      name: 'Radiología',
      data: [850],
      color: "brown"
    },
    {
      name: 'Ginecología',
      data: [1100],
      color: "pink"
    },
    {
      name: 'Oftalmología',
      data: [975],
      color: "orange"
    },
    {
      name: 'Medicina Interna',
      data: [899],
      color: "grey"
    }]
  }
  trabajador: any = [];
  medicos: Medicos[] = [];
  medi: any;
  constructor(
    private medicosService: EmpleadosService,

  ){}
  ngOnInit(): void {
   //this.get()
  }
/*
  getmedicos(){
    this.medicosService.getMedicos().subscribe(trabajador=>{
      this.medi = trabajador;
      for (let med of this.medi){
        let m = new Medicos(med._id, med._nombre, med._apellido, med._contacto, med._sueldo, med._puesto, med._especialidad)
        this.trabajador.push(m);
      }
      let grafico = this.trabajador;
      this.chartOptions.series[0].data[0].y = grafico.map((x: Medicos)=> x.aumento());
      this.chartOptions.series[1].data[0].y = grafico.map((x: Medicos)=> x.aumento());
      this.chartOptions.series[2].data[0].y = grafico.map((x: Medicos)=> x.aumento());
      this.chartOptions.series[3].data[0].y = grafico.map((x: Medicos)=> x.aumento());
      this.chartOptions.series[4].data[0].y = grafico.map((x: Medicos)=> x.aumento());
      this.chartOptions.series[5].data[0].y = grafico.map((x: Medicos)=> x.aumento());
      this.chartOptions.series[6].data[0].y = grafico.map((x: Medicos)=> x.aumento());
      this.chartOptions.series[7].data[0].y = grafico.map((x: Medicos)=> x.aumento());
      Highcharts.chart("grafico", this.chartOptions);
    });*/
  }

