import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginModule} from "../login/login";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
