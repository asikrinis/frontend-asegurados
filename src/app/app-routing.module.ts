import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAseguradosComponent } from './components/lista-asegurados/lista-asegurados.component';

const routes: Routes = [
  { path: 'asegurados', component: ListaAseguradosComponent },
  { path: '', redirectTo: '/asegurados', pathMatch: 'full' } // Redirige a la lista de asegurados por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
