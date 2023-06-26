import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-curso-loiane';

  isMouseOver = false;

  nomeDoCurso = 'Angular';

  valorInicial = 10;

  valorEscolhido = 'a';

  botaoClicado() {
    alert('Botão Clicado');
  }

  onKeyUp(valor) {
    console.log((event.target as HTMLInputElement).value);
  }

  salvarValor(valor) {
    console.log(valor);
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento);
  }

  onSelecionouValor(evento) {
    this.valorEscolhido = evento;
  }

}
