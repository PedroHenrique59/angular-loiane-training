import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {
      id: 1, nome: 'Aluno 01', email: 'aluno01@gmail.com'
    },
    {
      id: 2, nome: 'Aluno 02', email: 'aluno02@gmail.com'
    },
    {
      id: 3, nome: 'Aluno 03', email: 'aluno03@gmail.com'
    }
  ];

  constructor() {
  }

  getAlunos() {
    return this.alunos;
  }

  getAlunoPorId(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      if (this.alunos[i].id == id) {
        return this.alunos[i];
      }
    }
    return null;
  }

}
