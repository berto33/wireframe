import { Injectable } from '@angular/core';

import { Lezione } from 'src/app/Lezione';
import { LEZIONI } from 'src/app/mock-lezioni';

@Injectable({
  providedIn: 'root'
})

export class LezioniService {

  constructor() { }

  getLezioni(): Lezione[] {
    return LEZIONI;
  }
}
