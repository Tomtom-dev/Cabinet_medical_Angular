import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeplacementComponent } from './deplacement/deplacement.component';
import { InfirmiereDetailComponent } from './infirmiere-detail/infirmiere-detail.component';
import { InfirmiereModifyComponent } from './infirmiere-modify/infirmiere-modify.component';
import { InfirmiereComponent } from './infirmiere/infirmiere.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {path:"patient", component: PatientComponent},
  {path:"infirmiere", component: InfirmiereComponent},
  {path:"deplacement", component: DeplacementComponent},
  {path:"infirmiere/:id", component: InfirmiereDetailComponent },
  {path:"infirmiere/:id/modify", component: InfirmiereModifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
