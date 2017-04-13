import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UserModule} from '../user/user.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {NavComponent} from './navbar/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("I am the module");
  }
 }






