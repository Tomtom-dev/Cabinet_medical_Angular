import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientComponent } from './patient/patient.component';
import { InfirmiereComponent } from './infirmiere/infirmiere.component';
import { DeplacementComponent } from './deplacement/deplacement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientComponent,
    InfirmiereComponent,
    DeplacementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
