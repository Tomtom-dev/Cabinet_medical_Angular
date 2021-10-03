import { Component, OnInit } from '@angular/core';
import { Infirmiere } from '../shared/models/infirmiere';
import { InfirmiereService } from '../shared/service/infirmiere.service';

@Component({
  selector: 'app-infirmiere',
  templateUrl: './infirmiere.component.html',
  styleUrls: ['./infirmiere.component.css']
})
export class InfirmiereComponent implements OnInit {


  infirmieres : Infirmiere[] = []

  constructor(private infirmiereService : InfirmiereService ) { }

  ngOnInit(): void {

    this.infirmiereService.getInfirmiere().subscribe((infirmiere : Infirmiere[]) =>{
      this.infirmieres= infirmiere;
      console.log(infirmiere); 
    })
  }

}
