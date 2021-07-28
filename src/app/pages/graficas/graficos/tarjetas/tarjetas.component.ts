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
  // tamaño de la grafica, se agrega esta etiqueta en html por si quiere dejarse el tamaño fijo
  // si no se especifica se ajusta al componente que lo contiene
  view: any[] = [700, 280];
//colores de las barras de la grafica
  colorScheme = {
    domain: ['#fdda24', '#9063cd', '#ff7f41', '#59cbe8','#f5b6cd','#00c389']
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
