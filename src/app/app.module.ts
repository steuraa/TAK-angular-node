import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Player } from './models/player';
import { FlatStoneComponent } from './components/flat-stone/flat-stone.component';

@NgModule({
  declarations: [
    AppComponent,
    FlatStoneComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
