import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/service/patient.service';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {

  @Input() patient!: Patient; 

  constructor() { }

  ngOnInit(): void {
    
    
   
  }

}
