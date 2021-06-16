import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { LezioneComponent } from './components/lezione/lezione.component';

import { PaginaDashboardComponent } from './components/routes/pagina-dashboard/pagina-dashboard.component';
import { PaginaUtenteComponent } from './components/routes/pagina-utente/pagina-utente.component';
import { PaginaCorsoComponent } from './components/routes/pagina-corso/pagina-corso.component';
import { PaginaLezioneComponent } from './components/routes/pagina-lezione/pagina-lezione.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    LezioneComponent,
    PaginaDashboardComponent,
    PaginaUtenteComponent,
    PaginaCorsoComponent,
    PaginaLezioneComponent,
  ],

  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }