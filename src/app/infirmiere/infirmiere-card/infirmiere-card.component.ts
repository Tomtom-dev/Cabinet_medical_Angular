import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Infirmiere } from 'src/app/shared/models/infirmiere';

@Component({
  selector: 'app-infirmiere-card',
  templateUrl: './infirmiere-card.component.html',
  styleUrls: ['./infirmiere-card.component.css']
})
export class InfirmiereCardComponent implements OnInit {

  @Input() infirmiere!: Infirmiere;

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  redirectToAnnonce( id: number) { 
    this.route.navigate([`infirmiere/${id}`])
  }
}
