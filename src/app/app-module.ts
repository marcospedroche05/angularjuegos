import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FicherosComponent } from './components/ficheros.component/ficheros.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { FicherosService } from './services/ficherosService';
import { HomeapuestasComponent } from './components/homeapuestas.component/homeapuestas.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { EquiposdelayComponent } from './components/equiposdelay.component/equiposdelay.component';
import { ServiceFutbol } from './service/service.futbol';

@NgModule({
  declarations: [
    App,
    FicherosComponent,
    HomeapuestasComponent,
    MenuComponent,
    EquiposdelayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    FicherosService,
    ServiceFutbol
  ],
  bootstrap: [App]
})
export class AppModule { }
