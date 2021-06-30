import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/layout/main/app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { PaginaDashboardComponent } from './components/routes/pagina-dashboard/pagina-dashboard.component';
import { PaginaUtenteComponent } from './components/routes/pagina-utente/pagina-utente.component';
import { PaginaCorsoComponent } from './components/routes/pagina-corso/pagina-corso.component';
import { PaginaLezioneComponent } from './components/routes/pagina-lezione/pagina-lezione.component';

import { CartaCorsoComponent } from './components/views/carta-corso/carta-corso.component';
import { CartaCertificatoComponent } from './components/views/carta-certificato/carta-certificato.component';
import { LezioneComponent } from './components/views/lezione/lezione.component';

import { SafePipe } from './components/pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartaCorsoComponent,
    CartaCertificatoComponent,
    LezioneComponent,
    PaginaDashboardComponent,
    PaginaUtenteComponent,
    PaginaCorsoComponent,
    PaginaLezioneComponent,
    SafePipe,
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