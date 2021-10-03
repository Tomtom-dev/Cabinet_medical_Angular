import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientComponent } from './patient/patient.component';
import { InfirmiereComponent } from './infirmiere/infirmiere.component';
import { DeplacementComponent } from './deplacement/deplacement.component';
import { PatientCardComponent } from './patient/patient-card/patient-card.component';
import { InfirmiereCardComponent } from './infirmiere/infirmiere-card/infirmiere-card.component';
import { InfirmiereDetailComponent } from './infirmiere-detail/infirmiere-detail.component';
import { InfirmiereModifyComponent } from './infirmiere-modify/infirmiere-modify.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientComponent,
    InfirmiereComponent,
    DeplacementComponent,
    PatientCardComponent,
    InfirmiereCardComponent,
    InfirmiereDetailComponent,
    InfirmiereModifyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
