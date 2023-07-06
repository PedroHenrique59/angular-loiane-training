import {NgModule} from '@angular/core';
import {AlunosComponent} from './alunos.component';
import {CommonModule} from '@angular/common';
import {AlunoFormComponent} from './aluno-form/aluno-form.component';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import {AlunosRoutingModule} from './alunos.routing.module';
import {AlunosService} from '../../services/alunos.service';

@NgModule({
  imports: [CommonModule, AlunosRoutingModule],
  exports: [],
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  providers: [AlunosService]
})
export class AlunosModule {
}
