import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BenevolesComponent } from './components/benevoles/benevoles.component';
import {FormsModule} from "@angular/forms";
import { BenevolesDetailComponent } from './components/benevoles-detail/benevoles-detail.component';
import { AddBenevoleComponent } from './components/add-benevole/add-benevole.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BenevolesComponent,
    BenevolesDetailComponent,
    AddBenevoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
