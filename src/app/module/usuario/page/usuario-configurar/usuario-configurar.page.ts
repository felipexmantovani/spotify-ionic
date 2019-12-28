import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../../autenticacao/service/autenticacao.service';

@Component({
  selector: 'app-usuario-configurar',
  templateUrl: './usuario-configurar.page.html',
  styleUrls: ['./usuario-configurar.page.scss']
})
export class UsuarioConfigurarPage implements OnInit {
  private nomePagina: string = 'Configurar';

  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit() {}

  public getNomePagina(): string {
    return this.nomePagina;
  }

  public sair(): void {
    this.autenticacaoService.logout();
  }
}
