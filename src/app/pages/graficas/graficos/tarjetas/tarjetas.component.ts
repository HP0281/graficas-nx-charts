import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  view: any[] = [700, 280];

  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53', '#044389', '#FDDA24', '#f93d53']
  };
  cardColor: string = '#232837';

  single = [
    {
      "name": "Marcador sufi",
      "value": 4
    },
    {
      "name": "Aceptaron Encuesta",
      "value": 5
    },
    {
      "name": "Negaron Encuesta",
      "value": 7
    },
    {
      "name": "Promedio Pregunta 1",
      "value": 4.3
    },
    {
      "name": "Promedio Pregunta 2",
      "value": 3.2
    },
    {
      "name": "Promedio Pregunta 3",
      "value": 4
    }
  ];

  onSelect(event) {
    console.log(event);
  }
}
