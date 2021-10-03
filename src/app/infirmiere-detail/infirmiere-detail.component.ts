import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Infirmiere } from '../shared/models/infirmiere';
import { InfirmiereService } from '../shared/service/infirmiere.service';

@Component({
  selector: 'app-infirmiere-detail',
  templateUrl: './infirmiere-detail.component.html',
  styleUrls: ['./infirmiere-detail.component.css']
})
export class InfirmiereDetailComponent implements OnInit {

  infirmiere! : Infirmiere;

  constructor(private infirmiereService : InfirmiereService, private route :ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.infirmiereService.getInfirmiereById(id).subscribe((infirmiere : Infirmiere)=>{
      this.infirmiere=infirmiere;
      console.log(this.infirmiere);
      
    })
  }

}
