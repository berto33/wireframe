import { Component, Input, OnInit } from '@angular/core';
import { CORSI } from 'src/app/mock-corsi';

@Component({
  selector: 'app-carta-corso',
  templateUrl: './carta-corso.component.html',
  styleUrls: ['./carta-corso.component.scss'],
})

export class CartaCorsoComponent implements OnInit {
  corsi = CORSI;
  @Input() sliceStart?: number;
  @Input() sliceEnd?: number;
  @Input() showSeeAll = false;

  constructor() {
    // var bar = document.getElementsByClassName('progress-bar');
    // console.log(bar);
  }

  ngOnInit(): void {}
}
