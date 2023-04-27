import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from "./components/card/card.component";
import {ButtonComponent} from "./components/button/button.component";

// Carrega todos os componentes da aplicação e exporta para o main.ts
@NgModule({
  declarations: [
    AppComponent, CardComponent, ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
