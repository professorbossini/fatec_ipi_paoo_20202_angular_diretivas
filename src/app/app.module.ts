import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoaCartaoComponent } from './pessoa-cartao/pessoa-cartao.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaCartaoComponent,
    PessoaCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
