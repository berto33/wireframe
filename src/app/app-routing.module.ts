import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaDashboardComponent } from './components/routes/pagina-dashboard/pagina-dashboard.component';
import { PaginaUtenteComponent } from './components/routes/pagina-utente/pagina-utente.component';
import { PaginaCorsoComponent } from './components/routes/pagina-corso/pagina-corso.component';
import { PaginaLezioneComponent } from './components/routes/pagina-lezione/pagina-lezione.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagina-dashboard', pathMatch: 'full' },
  { path: 'pagina-dashboard', component: PaginaDashboardComponent },
  { path: 'pagina-utente', component: PaginaUtenteComponent },
  { path: 'pagina-corso', component: PaginaCorsoComponent },
  { path: 'pagina-lezione/:id', component: PaginaLezioneComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }