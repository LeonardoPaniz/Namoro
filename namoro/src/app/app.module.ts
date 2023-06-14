import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';

import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      CartaComponent,
      AcessoNegadoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
