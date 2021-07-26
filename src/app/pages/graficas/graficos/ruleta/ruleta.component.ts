import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tamaño de la grafica, se agrega esta etiqueta en html por si quiere dejarse el tamaño fijo
  // si no se especifica se ajusta al componente que lo contiene
  view: [number, number] = [600, 400];

  // opciones de personalizacion de la grafica
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  //colores de las barras de la grafica
  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53']
  };

  single = [
    {
      "name": "Sucursal",
      "value": 14
    },
    {
      "name": "Casa",
      "value": 20
    },
    {
      "name": "Telefono",
      "value": 10
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
