import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barras-agrupadas',
  templateUrl: './barras-agrupadas.component.html',
  styleUrls: ['./barras-agrupadas.component.css']
})
export class BarrasAgrupadasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Fechas';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Cantidad llamadas';
  legendTitle: string = 'Fechas';
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53']
  };
  multi = [
    {
      "name": "2020-11-07",
      "series": [
        {
          "name": "Sucursal",
          "value": 2
        },
        {
          "name": "Casa",
          "value": 5
        },
        {
          "name": "Telefono",
          "value": 1
        }
      ]
    },
  
    {
      "name": "2020-11-08",
      "series": [
        {
          "name": "Sucursal",
          "value": 10
        },
        {
          "name": "Casa",
          "value": 5
        },
        {
          "name": "Telefono",
          "value": 7
        }
      ]
    },
  
    {
      "name": "2020-11-09",
      "series": [
        {
          "name": "Sucursal",
          "value": 7
        },
        {
          "name": "Casa",
          "value": 5
        },
        {
          "name": "Telefono",
          "value": 3
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
