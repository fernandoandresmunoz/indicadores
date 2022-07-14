import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDetailComponent } from './chart-detail/chart-detail.component';
import { IndicadorDetailComponent } from './indicador-detail/indicador-detail.component';
import { IndicadoresListComponent } from './indicadores-list/indicadores-list.component';

const routes: Routes = [
  {
    path: '',
    component: IndicadoresListComponent
  },
  {
    path: 'indicador/:id',
    component: IndicadorDetailComponent
  },
  {
    path: 'chart-detail/:id',
    component: ChartDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
