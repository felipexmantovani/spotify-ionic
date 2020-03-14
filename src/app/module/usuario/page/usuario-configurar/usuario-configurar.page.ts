import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../../autenticacao/service/autenticacao.service';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-usuario-configurar',
  templateUrl: './usuario-configurar.page.html',
  styleUrls: ['./usuario-configurar.page.scss']
})
export class UsuarioConfigurarPage implements OnInit {
  private nomePagina: string = 'Configurar';

  public usuario: Usuario;

  constructor(private autenticacaoService: AutenticacaoService, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.buscarUsuario();
  }

  public getNomePagina(): string {
    return this.nomePagina;
  }

  private async buscarUsuario() {
    this.usuario = await this.usuarioService.buscarStorage();
  }

  public sair(): void {
    this.autenticacaoService.logout();
  }
}
