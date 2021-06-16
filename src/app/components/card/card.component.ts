import { Component, OnInit, Input } from '@angular/core';
// import { CORSI } from '../../mock-corsi'
import {Corso} from '../../Corso';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  // corsi = CORSI;
  @Input() corso: Corso;

  constructor() {
    // var bar = document.getElementsByClassName('progress-bar');
    // console.log(bar);
  }

  ngOnInit(): void { }

}