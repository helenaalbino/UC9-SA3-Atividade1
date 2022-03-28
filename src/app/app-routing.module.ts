import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './view/contato/contato.component';
import { JogadorComponent } from './view/jogador/jogador.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contato", component: ContatoComponent},
  {path: "jogador", component: JogadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
