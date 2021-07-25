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
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Preguntas';
  showYAxisLabel = true;
  yAxisLabel = 'Promedio Preguntas';

  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53']
  };
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

  onSelect(event) {
    console.log(event);
  }
}
