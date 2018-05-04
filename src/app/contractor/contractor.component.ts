import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common' ;

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
  }

}
