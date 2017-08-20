import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import {
    PagesComponent,
    PersoComponent
 }  from './pages';

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      routing
  ],
  declarations: [
      AppComponent,

      PagesComponent,
      PersoComponent
  ],
  bootstrap: [
      AppComponent
  ]
})

export class AppModule { }
