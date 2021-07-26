import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.css']
})
export class LineasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tamaño de la grafica, se agrega esta etiqueta en html por si quiere dejarse el tamaño fijo
  // si no se especifica se ajusta al componente que lo contiene
  view: any[] = [900, 350];

  // opciones de personalizacion de la grafica
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Informacion de llamadas';
  yAxisLabel: string = '';
  timeline: boolean = true;
  //colores de las lineas y leyendas de la grafica
  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53']
  };

  multi = [
    {
      "name": "Sucursal",
      "series": [
        {
          "name":"",
          "value": 0
        },
        {
          "name": "Total llamadas",
          "value": 5
        },
        {
          "name": "Llamadas enviadas",
          "value": 2
        },
        {
          "name": "Lamadas Recibidas",
          "value": 3
        },
        {
          "name": "Lamadas atendidas",
          "value": 3
        }
      ]
    },
  
    {
      "name": "Casa",
      "series": [
        {
          "name":"",
          "value": 0
        },
        {
          "name": "Total llamadas",
          "value": 10
        },
        {
          "name": "Llamadas enviadas",
          "value": 2
        },
        {
          "name": "Lamadas Recibidas",
          "value": 7 
        },
        {
          "name": "Lamadas atendidas",
          "value": 3
        }
      ]
    },
  
    {
      "name": "Telefono",
      "series": [
        {
          "name":"",
          "value": 0
        },
        {
          "name": "Total llamadas",
          "value": 15 
        },
        {
          "name": "Llamadas enviadas",
          "value": 5
        },
        {
          "name": "Lamadas Recibidas",
          "value": 10 
        },
        {
          "name": "Lamadas atendidas",
          "value": 8
        }
      ]
    }
  ];
  

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
