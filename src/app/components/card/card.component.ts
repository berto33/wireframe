import { Component, OnInit, Input } from '@angular/core';
import { CORSI } from 'src/app/mock-corsi';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  corsi = CORSI;
  @Input() sliceStart?: number;
  @Input() sliceEnd?: number;

  constructor() {
    // var bar = document.getElementsByClassName('progress-bar');
    // console.log(bar);
  }

  ngOnInit(): void { }

}