import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timecalls',
  templateUrl: './timecalls.component.html',
  styleUrls: ['./timecalls.component.css']
})
export class TimecallsComponent implements OnInit {
  //Hour 0-23
  constructor() { }
  
  ngOnInit(): void {
  }
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  legendPosition: string = 'below';
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Actividad';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Tiempo total (horas)';

  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53']
  };
  schemeType: string = 'linear';
  multi = [
    {
      "name": "Sucursal",
      "series": [
        {
          "name": "T navegacionIvr",
          "value": 3
        },
        {
          "name": "T transferencia",
          "value": 20
        },
          {
            "name": "T Espera Aliado",
            "value": 1
          },
          {
            "name": "T Conversacion",
            "value": 1
          }
      ]
    },
  
    {
      "name": "Casa",
      "series": [
        {
          "name": "T navegacionIvr",
          "value": 2
        },
        {
          "name": "T transferencia",
          "value": 14
        },
          {
            "name": "T Espera Aliado",
            "value": 1
          },
          {
            "name": "T Conversacion",
            "value": 2
          }
      ]
    },
  
    {
      "name": "Telefono",
      "series": [
        {
          "name": "T navegacionIvr",
          "value": 4
        },
        {
          "name": "T transferencia",
          "value": 10
        },
          {
            "name": "T Espera Aliado",
            "value": 0
          },
          {
            "name": "T Conversacion",
            "value": 1
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
