import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revolucion',
  templateUrl: './revolucion.component.html',
  styleUrls: ['./revolucion.component.css']
})
export class RevolucionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tamaño de la grafica, se agrega esta etiqueta en html por si quiere dejarse el tamaño fijo
  // si no se especifica se ajusta al componente que lo contiene
  view: any[] = [500, 400];
  // opciones de personalizacion de la grafica
  legend: boolean = true;
  legendPosition: string = 'below';
  min: number =0;
  max: number =10;
  units: String = "Minutos"
  //colores de las barras de la grafica
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  single = [
  
  {
    "name": "Tiempo Navegacion",
    "value": 3.20
  },
  {
    "name": "Tiempo Espera",
    "value": 5.21
  },
  {
    "name": "Tiempo Conversacion",
    "value": 6
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
