import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common' ;
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  private location: Location
  ) { }

  ngOnInit() {
  }

 
 
  
}
