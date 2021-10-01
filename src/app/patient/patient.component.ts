import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/models/patient';
import { PatientService } from '../shared/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients : Patient[] = []

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatient().subscribe((patient : Patient[]) =>{
      this.patients = patient;
      console.log(patient);
      console.log(patient[0].prenom);
    })
  }

}
