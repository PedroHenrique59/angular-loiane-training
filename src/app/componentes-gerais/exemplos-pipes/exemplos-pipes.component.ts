import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript',
    rating: '4.54321',
    numeroPaginas: '314',
    preco: '44.99',
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  constructor() {
  }

  ngOnInit() {
  }

  addCurso(curso) {
    this.livros.push(curso);
  }

}

