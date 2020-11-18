import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './pagina/contato/contato.component';
import { HomeComponent } from './pagina/home/home.component';
import { ListaComponent } from './pagina/lista/lista.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'contato', component: ContatoComponent },
  {path: 'lista', component: ListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
