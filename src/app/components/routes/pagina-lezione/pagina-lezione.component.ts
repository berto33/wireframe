import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { LezioniService } from 'src/app/components/services/lezioni.service';
import { Lezione } from 'src/app/Lezione';

@Component({
  selector: 'app-pagina-lezione',
  templateUrl: './pagina-lezione.component.html',
  styleUrls: ['./pagina-lezione.component.scss']
})

export class PaginaLezioneComponent implements OnInit {
  private subscription: Subscription;
  lezioni: Lezione[] = [];
  active = 1;
  fetchedId: number;
  fetchedLezione: any;

  constructor(
    private lezioniService: LezioniService,
    private activatedRoute: ActivatedRoute
  ) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.fetchedId = param['id']
    )
  }

  ngOnInit(): void {
    this.getLezioni();
    this.showLezione();
  }

  getLezioni(): void {
    this.lezioni = this.lezioniService.getLezioni();
  }

  showLezione() {
    this.lezioni.forEach(lezione => {
      if (this.fetchedId == lezione.id) {
        this.fetchedLezione = lezione;
      }
    })
    // console.log(this.fetchedLezione)
  }
}