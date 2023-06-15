import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'carta', component:CartaComponent, canActivate:[AuthGuard]},
  {path:'acesso-negado', component:AcessoNegadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
