import { Component, OnInit } from '@angular/core';
import { CORSI } from 'src/app/mock-corsi';

@Component({
  selector: 'app-pagina-dashboard',
  templateUrl: './pagina-dashboard.component.html',
  styleUrls: ['./pagina-dashboard.component.css']
})

export class PaginaDashboardComponent implements OnInit {
  corsi = CORSI;

  constructor() { }

  ngOnInit(): void { }
  
}