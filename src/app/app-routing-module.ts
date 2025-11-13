import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeapuestasComponent } from './components/homeapuestas.component/homeapuestas.component';
import { EquiposdelayComponent } from './components/equiposdelay.component/equiposdelay.component';

const routes: Routes = [
  {path: "", component: HomeapuestasComponent},
  {path: "equipo/:idEquipo", component: EquiposdelayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
