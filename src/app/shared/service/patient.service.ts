import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient){}

  public getPatient(): Observable <Patient[]>{
    return this.http.get<Patient[]>(`${environment.url}/patients`);
  }
}
