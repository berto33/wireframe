import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-lezione',
  templateUrl: './pagina-lezione.component.html',
  styleUrls: ['./pagina-lezione.component.css']
})

export class PaginaLezioneComponent implements OnInit {
  active = 1;
  
  constructor() {
    // private route: ActivatedRoute

    // this.titolo = this.route.snapshot.params.titolo;
    // this.tipo = this.route.snapshot.params.tipo;
  }

  ngOnInit(): void {
    // alternativa recupero dati con paramMap

    // this.route.paramMap.subscribe(params => {
    //   this.titolo = params.get('titolo');
    //   this.tipo = params.get('tipo');
    // })
  }

}