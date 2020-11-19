import { Produto } from './../../produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  produto = new Produto('Guarujá', 'contato@agencia.com.br', 1000, 0.20, '2020-12-05');
  constructor() { }

  ngOnInit(): void {
  }

}
