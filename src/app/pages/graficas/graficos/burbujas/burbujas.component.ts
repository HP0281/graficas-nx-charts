import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burbujas',
  templateUrl: './burbujas.component.html',
  styleUrls: ['./burbujas.component.css']
})
export class BurbujasComponent implements OnInit {
  view: [number, number] = [700, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Years';
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;
  xScaleMin: number = 0;
  xScaleMax: number = 85;
  
  constructor() { }

  ngOnInit(): void {
  }

  // options

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  bubbleData = [
    {
    "id": "2020-11-07999CBZsucursal10NO",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "999",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "sucursal",
    "sufiMarker": null,
    "acceptedSurvey": "NO",
    "totalCalls": 1,
    "callsSent": 1,
    "incomingCalls": 1,
    "answeredCalls": 1,
    "numberOfCalls20Sec": 0,
    "ivrNavigation":       [
       0,
       3,
       20
    ],
    "transferTime":       [
       2,
       51,
       40
    ],
    "timeWaitAlly":       [
       0,
       0,
       21
    ],
    "talkTime":       [
       0,
       0
    ],
    "totalInteractionTime":       [
       2,
       55,
       21
    ],
    "numberOfSurveysYes": 0,
    "averageQuestion1": 1,
    "averageQuestion2": 2,
    "averageQuestion3": 3
 },
    {
    "id": "2020-11-07999CBZCasaSINO",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "999",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "Casa",
    "sufiMarker": "SI",
    "acceptedSurvey": "NO",
    "totalCalls": 1,
    "callsSent": 1,
    "incomingCalls": 1,
    "answeredCalls": 1,
    "numberOfCalls20Sec": 0,
    "ivrNavigation":       [
       0,
       1,
       40
    ],
    "transferTime":       [
       2,
       50,
       40
    ],
    "timeWaitAlly":       [
       0,
       0
    ],
    "talkTime":       [
       0,
       2,
       22
    ],
    "totalInteractionTime":       [
       2,
       55,
       22
    ],
    "numberOfSurveysYes": 0,
    "averageQuestion1": 1,
    "averageQuestion2": 2,
    "averageQuestion3": 3
 },
    {
    "id": "2020-11-07999CBZCasa10NO",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "999",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "Casa",
    "sufiMarker": null,
    "acceptedSurvey": "NO",
    "totalCalls": 2,
    "callsSent": 2,
    "incomingCalls": 2,
    "answeredCalls": 2,
    "numberOfCalls20Sec": 1,
    "ivrNavigation":       [
       0,
       6,
       40
    ],
    "transferTime":       [
       5,
       38
    ],
    "timeWaitAlly":       [
       0,
       0
    ],
    "talkTime":       [
       0,
       5,
       24
    ],
    "totalInteractionTime":       [
       5,
       50,
       44
    ],
    "numberOfSurveysYes": 0,
    "averageQuestion1": 1,
    "averageQuestion2": 2,
    "averageQuestion3": 3
 },
    {
    "id": "2020-11-07999CBZTelefono10SI",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "999",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "Telefono",
    "sufiMarker": null,
    "acceptedSurvey": "SI",
    "totalCalls": 1,
    "callsSent": 1,
    "incomingCalls": 1,
    "answeredCalls": 1,
    "numberOfCalls20Sec": 0,
    "ivrNavigation":       [
       0,
       0
    ],
    "transferTime":       [
       2,
       50,
       42
    ],
    "timeWaitAlly":       [
       0,
       0
    ],
    "talkTime":       [
       0,
       3,
       20
    ],
    "totalInteractionTime":       [
       2,
       54,
       2
    ],
    "numberOfSurveysYes": 1,
    "averageQuestion1": 1,
    "averageQuestion2": 2,
    "averageQuestion3": 3
 },
    {
    "id": "2020-11-07999CBZsucursal10SI",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "999",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "sucursal",
    "sufiMarker": null,
    "acceptedSurvey": "SI",
    "totalCalls": 1,
    "callsSent": 1,
    "incomingCalls": 1,
    "answeredCalls": 1,
    "numberOfCalls20Sec": 1,
    "ivrNavigation":       [
       0,
       1,
       40
    ],
    "transferTime":       [
       0,
       0,
       53
    ],
    "timeWaitAlly":       [
       0,
       0
    ],
    "talkTime":       [
       0,
       15,
       37
    ],
    "totalInteractionTime":       [
       0,
       18,
       50
    ],
    "numberOfSurveysYes": 1,
    "averageQuestion1": 1,
    "averageQuestion2": 2,
    "averageQuestion3": 3
 },
    {
    "id": "2020-11-07999CBZsucursal1010",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "999",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "sucursal",
    "sufiMarker": null,
    "acceptedSurvey": null,
    "totalCalls": 1,
    "callsSent": 1,
    "incomingCalls": 0,
    "answeredCalls": 0,
    "numberOfCalls20Sec": 0,
    "ivrNavigation":       [
       0,
       1,
       40
    ],
    "transferTime": null,
    "timeWaitAlly": null,
    "talkTime": null,
    "totalInteractionTime": null,
    "numberOfSurveysYes": 0,
    "averageQuestion1": null,
    "averageQuestion2": null,
    "averageQuestion3": null
 },
    {
    "id": "2020-11-07999CBZCasa10SI",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "999",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "Casa",
    "sufiMarker": null,
    "acceptedSurvey": "SI",
    "totalCalls": 1,
    "callsSent": 1,
    "incomingCalls": 1,
    "answeredCalls": 1,
    "numberOfCalls20Sec": 0,
    "ivrNavigation":       [
       0,
       3,
       20
    ],
    "transferTime":       [
       0,
       4,
       18
    ],
    "timeWaitAlly":       [
       0,
       0
    ],
    "talkTime":       [
       2,
       47,
       4
    ],
    "totalInteractionTime":       [
       2,
       55,
       22
    ],
    "numberOfSurveysYes": 1,
    "averageQuestion1": 1,
    "averageQuestion2": 2,
    "averageQuestion3": 3
 },
    {
    "id": "2020-11-07998CBZCasa10NO",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "998",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "Casa",
    "sufiMarker": null,
    "acceptedSurvey": "NO",
    "totalCalls": 1,
    "callsSent": 1,
    "incomingCalls": 1,
    "answeredCalls": 1,
    "numberOfCalls20Sec": 1,
    "ivrNavigation":       [
       0,
       3,
       20
    ],
    "transferTime":       [
       2,
       48,
       42
    ],
    "timeWaitAlly":       [
       0,
       0
    ],
    "talkTime":       [
       0,
       3,
       20
    ],
    "totalInteractionTime":       [
       2,
       55,
       22
    ],
    "numberOfSurveysYes": 0,
    "averageQuestion1": 1,
    "averageQuestion2": 2,
    "averageQuestion3": 3
 },
    {
    "id": "2020-11-07999CBZTelefono10NO",
    "localdadateOfAdmission":       [
       2020,
       11,
       7
    ],
    "allyInCharge": "999",
    "sourceIncome": "CBZ",
    "typeOfOrigin": "Telefono",
    "sufiMarker": null,
    "acceptedSurvey": "NO",
    "totalCalls": 1,
    "callsSent": 1,
    "incomingCalls": 1,
    "answeredCalls": 1,
    "numberOfCalls20Sec": 1,
    "ivrNavigation":       [
       0,
       3,
       20
    ],
    "transferTime":       [
       2,
       48,
       20
    ],
    "timeWaitAlly":       [
       0,
       0,
       19
    ],
    "talkTime":       [
       0,
       0
    ],
    "totalInteractionTime":       [
       2,
       51,
       59
    ],
    "numberOfSurveysYes": 0,
    "averageQuestion1": 1,
    "averageQuestion2": 2,
    "averageQuestion3": 3
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
