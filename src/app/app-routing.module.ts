import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './componentes-rotas/home/home.component';
import {LoginComponent} from './componentes-rotas/login/login.component';
import {CursosComponent} from './componentes-rotas/cursos/cursos.component';
import {CursoDetalheComponent} from './componentes-rotas/curso-detalhe/curso-detalhe.component';
import {CursoNaoEncontradoComponent} from './componentes-rotas/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: 'cursos', component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
