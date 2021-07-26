import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tamaño de la grafica, se agrega esta etiqueta en html por si quiere dejarse el tamaño fijo
  // si no se especifica se ajusta al componente grande
  view: any[] = [700, 400];

  // opciones de personalizacion de la grafica
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Preguntas';
  showYAxisLabel = true;
  yAxisLabel = 'Promedio Preguntas';
  // colores de las barras
  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53']
  };
  // data a ser representada en este caso promedio de cada pregunta
  single = [
    {
      "name": "Pregunta 1",
      "value": 4
    },
    {
      "name": "Pregunta 2",
      "value": 3.5
    },
    {
      "name": "Pregunta 3",
      "value": 4.3
    }
  ];
   // eventos de la grafica
  onSelect(event) {
    console.log(event);
  }
}
