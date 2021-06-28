import { Component, OnInit } from '@angular/core';
declare function scroll(): any

@Component({
  selector: 'app-pagina-dashboard',
  templateUrl: './pagina-dashboard.component.html',
  styleUrls: ['./pagina-dashboard.component.scss']
})

export class PaginaDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    scroll();
  }

}