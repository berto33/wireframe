import { Component, OnInit } from '@angular/core';
import { CORSI } from 'src/app/mock-corsi';

@Component({
  selector: 'app-pagina-utente',
  templateUrl: './pagina-utente.component.html',
  styleUrls: ['./pagina-utente.component.css']
})

export class PaginaUtenteComponent implements OnInit {
  corsi = CORSI;
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void { }

}
