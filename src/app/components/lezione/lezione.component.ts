import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lezione } from 'src/app/Lezione';
import { LEZIONI } from 'src/app/mock-lezioni';

@Component({
  selector: 'app-lezione',
  templateUrl: './lezione.component.html',
  styleUrls: ['./lezione.component.css']
})

export class LezioneComponent implements OnInit {
  lezioni = LEZIONI;
  
  constructor(private route: Router) {}

  ngOnInit(): void { }

  getDocOrVid(lezione: Lezione): void {
    // console.log(lezione.url);
    if (lezione.tipo == "doc") {
      window.open(lezione.url, "_blank");
    } else {
      this.route.navigate(['/pagina-lezione']);
    }
  }
} 