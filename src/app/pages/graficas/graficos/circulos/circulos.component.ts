import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circulos',
  templateUrl: './circulos.component.html',
  styleUrls: ['./circulos.component.css']
})
export class CirculosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tamaño de la grafica, se agrega esta etiqueta en html por si quiere dejarse el tamaño fijo
  // si no se especifica se ajusta al componente que lo contiene
  view: any[] = [500, 400];

 // opciones de personalizacion de la grafica
  showLegend: boolean = true;
  showLabels: boolean = true;
  //colores de los circulos de la grafica
  colorScheme = {
    domain: ['#fdda24', '#9063cd', '#ff7f41']
  };

  single = [
    {
      "name": "Sucursal",
      "value": 25
    },
    {
      "name": "Casa",
      "value": 26
    },
    {
      "name": "Telefono",
      "value": 30
    }
  ];

  onSelect(event) {
    console.log(event);
  }
}
