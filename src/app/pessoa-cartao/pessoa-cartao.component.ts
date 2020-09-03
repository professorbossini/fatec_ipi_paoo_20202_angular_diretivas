import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-cartao',
  templateUrl: './pessoa-cartao.component.html',
  styleUrls: ['./pessoa-cartao.component.css']
})
export class PessoaCartaoComponent {
  @Input() pessoa;
}
