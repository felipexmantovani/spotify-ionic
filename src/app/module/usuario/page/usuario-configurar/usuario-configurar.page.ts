import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-usuario-configurar',
  templateUrl: './usuario-configurar.page.html',
  styleUrls: ['./usuario-configurar.page.scss']
})
export class UsuarioConfigurarPage implements OnInit {
  private nomePagina: string = 'Configurar';

  public usuario: Usuario;

  constructor(private authService: AuthService, private usuarioService: UsuarioService) {}

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
    this.authService.logout();
  }
}
