import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

  @Output() pessoaAdicionada = new EventEmitter();

  adicionar (nome, idade){
    const pessoa = {
      nome: nome,
      idade: idade
    };
    this.pessoaAdicionada.emit(pessoa);
  }

}
