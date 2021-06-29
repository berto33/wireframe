import { Component, Input, OnInit } from '@angular/core';
import { CORSI } from 'src/app/mock-corsi';

@Component({
  selector: 'app-carta-corso',
  templateUrl: './carta-corso.component.html',
  styleUrls: ['./carta-corso.component.scss'],
})

export class CartaCorsoComponent implements OnInit {
  corsi = CORSI;
  @Input() showSeeAll = false;
  @Input() sliceStart?: number;
  @Input() sliceEnd?: number;
  @Input() inputClass?: string;

  constructor() { }

  ngOnInit(): void { }
}
