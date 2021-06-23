import { Component, Input, OnInit } from '@angular/core';
import { CORSI } from 'src/app/mock-corsi';

@Component({
  selector: 'app-carta-certificato',
  templateUrl: './carta-certificato.component.html',
  styleUrls: ['./carta-certificato.component.scss']
})

export class CartaCertificatoComponent implements OnInit {
  corsi = CORSI;
  @Input() sliceStart?: number;
  @Input() sliceEnd?: number;
  
  constructor() { }

  ngOnInit(): void { }

}