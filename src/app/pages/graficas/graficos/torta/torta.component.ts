import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torta',
  templateUrl: './torta.component.html',
  styleUrls: ['./torta.component.css']
})
export class TortaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#044389', '#f93d53']
  };
  single = [
    {
      "name": "Acepto encuesta",
      "value": 10
    },
    {
      "name": "No acepto encuesta",
      "value": 12
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
