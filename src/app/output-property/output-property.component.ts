import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  @Output() valorEscolhido = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  adicionar(valor) {
    this.valorEscolhido.emit(valor);
  }

}
