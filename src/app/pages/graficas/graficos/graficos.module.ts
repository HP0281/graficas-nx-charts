import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { GraficosComponent } from './graficos.component';
import { RuletaComponent } from './ruleta/ruleta.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { TortaComponent } from './torta/torta.component';
import { LineasComponent } from './lineas/lineas.component';
import { RevolucionComponent } from './revolucion/revolucion.component';
import { BurbujasComponent } from './burbujas/burbujas.component';
import { CirculosComponent } from './circulos/circulos.component';
import { BarrasAgrupadasComponent } from './barras-agrupadas/barras-agrupadas.component';
import { BarrasComponent } from './barras/barras.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { TimecallsComponent } from './timecalls/timecalls.component';


@NgModule({
  declarations: [GraficosComponent, RuletaComponent, TortaComponent, LineasComponent, RevolucionComponent, BurbujasComponent, CirculosComponent, BarrasAgrupadasComponent, BarrasComponent, TarjetasComponent, TimecallsComponent],
  imports: [
    CommonModule,
    FormsModule,
    GraficosRoutingModule,
    NgxChartsModule
  ]
})
export class GraficosModule { }
