import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textoBotao: string = 'Esconder';
  esconder: boolean = false;

  pessoas = [
    { nome: 'José', idade: 18 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Ana', idade: 30 },
  ];

  adicionar(n: string, i: number) {
    this.pessoas.push({ nome: n, idade: i });
  }

  alterarExibicao(): void {
    this.textoBotao = this.esconder ? 'Exibir' : 'Esconder';
    this.esconder = !this.esconder;
  }
}
