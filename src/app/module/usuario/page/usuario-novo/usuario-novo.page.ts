import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingService } from '../../../../core/service/loading/loading.service';
import { AutenticacaoService } from '../../../autenticacao/service/autenticacao.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.page.html',
  styleUrls: ['./usuario-novo.page.scss']
})
export class UsuarioNovoPage implements OnInit {
  private nomePagina: string = 'Criar conta';

  private usuario: Usuario = new Usuario();
  public usuarioForm: FormGroup = null;

  public digitarEmail: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit() {
    this.criarForm();
  }

  public getNomePagina(): string {
    return this.nomePagina;
  }

  private criarForm(): void {
    this.usuario = new Usuario();
    this.usuarioForm = this.usuario.criarForm(this.formBuilder);
  }

  public avancar(): void {
    this.digitarEmail = false;
  }

  public onSubmit(): void {
    this.loadingService.show('Criando a conta, espere...');
    setTimeout(() => {
      this.loadingService.hide();
      this.loadingService.show('Entrando...');
    }, 2000);
    setTimeout(() => {
      this.loadingService.hide();
      this.autenticacaoService.loginFake();
    }, 3000);
  }
}
