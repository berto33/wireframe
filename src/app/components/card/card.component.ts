import { Component, OnInit } from '@angular/core';
import { CORSI } from '../../mock-corsi'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  corsi = CORSI;

  constructor() {
    // var bar = document.getElementsByClassName('progress-bar');
    // console.log(bar);
    
  }

  ngOnInit(): void { }

}