import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlunosService} from '../../../services/alunos.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  private inscricao: Subscription;

  private id: number;

  private aluno: any = {};

  constructor(private alunoService: AlunosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(parametro => {
      this.id = parametro.id;
      this.aluno = this.alunoService.getAlunoPorId(this.id);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
