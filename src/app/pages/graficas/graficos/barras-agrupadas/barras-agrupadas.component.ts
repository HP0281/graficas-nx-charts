import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barras-agrupadas',
  templateUrl: './barras-agrupadas.component.html',
  styleUrls: ['./barras-agrupadas.component.css'],
})
export class BarrasAgrupadasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // tamaño de la grafica, se agrega esta etiqueta en html por si quiere dejarse el tamaño fijo
  // si no se especifica se ajusta al componente que lo contiene
  view: any[] = [700, 400];

  // opciones de personalizacion de la grafica
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Fechas';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Cantidad llamadas';
  legendTitle: string = 'Fechas';
  legendPosition: string = 'below';
  //colores de las barras de la grafica
  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53'],
  };
  //datos a ser representados, en este caso la informacion esta agrupada por fechas
  //y por cada fecha se sacan los valores de la cantidad de llamadas por origen
  multi = [
    {
      name: '2020-11-07',
      series: [
        {
          name: 'Sucursal',
          value: 2,
        },
        {
          name: 'Casa',
          value: 5,
        },
        {
          name: 'Telefono',
          value: 1,
        },
      ],
    },

    {
      name: '2020-11-08',
      series: [
        {
          name: 'Sucursal',
          value: 10,
        },
        {
          name: 'Casa',
          value: 5,
        },
        {
          name: 'Telefono',
          value: 7,
        },
      ],
    },

    {
      name: '2020-11-09',
      series: [
        {
          name: 'Sucursal',
          value: 7,
        },
        {
          name: 'Casa',
          value: 5,
        },
        {
          name: 'Telefono',
          value: 3,
        },
      ],
    },
  ];
  //eventos de la grafica
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
