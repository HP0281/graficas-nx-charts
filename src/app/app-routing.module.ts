import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', pathMatch:'full', redirectTo:'/graficas'},
{ path: 'graficas', loadChildren: () => import('./pages/graficas/graficos/graficos.module').then(m => m.GraficosModule) },
{ path: '**', redirectTo:'/graficas'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
