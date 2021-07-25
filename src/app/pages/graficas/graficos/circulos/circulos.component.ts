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
  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#044389', '#FDDA24', '#f93d53']
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
