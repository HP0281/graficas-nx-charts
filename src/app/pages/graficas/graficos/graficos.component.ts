import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as domtoimage from 'dom-to-image';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  downloadFile(){
   domtoimage.toPng(document.getElementById('infpdf'))
   
   .then(function (blob) {
       var pdf = new jsPDF('p', 'pt', 'a4');
       pdf.addImage(blob, 'PNG', 0, 40, pdf.internal.pageSize.getWidth() -2 * 15, 
       pdf.internal.pageSize.getHeight() -2 *20);
       pdf.save(`${new Date().toISOString()}.pdf`);
   });
  }
}
