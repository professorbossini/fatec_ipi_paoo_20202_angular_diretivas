import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  pessoas = [
    { nome: 'José', idade: 18 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Ana', idade: 30 },
  ];


  onAdicionarPessoa (pessoa){
    this.pessoas = [pessoa, ...this.pessoas];
  }

}
