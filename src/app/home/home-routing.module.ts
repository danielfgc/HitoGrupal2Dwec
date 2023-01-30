import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {FormularioComponent} from '../formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'form',
    component: FormularioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
