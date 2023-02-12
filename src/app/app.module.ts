import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BenevolesComponent } from './components/benevoles/benevoles.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BenevolesDetailComponent } from './components/benevoles-detail/benevoles-detail.component';
import { AddBenevoleComponent } from './components/add-benevole/add-benevole.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdatesComponent } from './components/updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BenevolesComponent,
    BenevolesDetailComponent,
    AddBenevoleComponent,
    UpdatesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
