import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LezioniService } from '../../services/lezioni.service';
import { Lezione } from 'src/app/Lezione';

@Component({
  selector: 'app-lezione',
  templateUrl: './lezione.component.html',
  styleUrls: ['./lezione.component.scss']
})

export class LezioneComponent implements OnInit {
  lezioni: Lezione[] = [];

  constructor(
    private route: Router,
    private lezioniService: LezioniService
  ) { }

  ngOnInit(): void {
    this.getLezioni();
  }

  getLezioni(): void {
    this.lezioni = this.lezioniService.getLezioni();
    // console.log(this.lezioni)
  }

  gotoLezione(lezione: Lezione): void {
    if (lezione.doc) {
      window.open(lezione.url, "_blank");
    } else {
      this.route.navigate(['/pagina-lezione/' + lezione.id]);
    }
  }
}