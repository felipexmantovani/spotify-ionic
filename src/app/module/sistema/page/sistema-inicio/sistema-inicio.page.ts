import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../core/service/loading/loading.service';
import { Login } from '../../../autenticacao/model/login';
import { AutenticacaoService } from '../../../autenticacao/service/autenticacao.service';
import { AutenticacaoUtil } from '../../../autenticacao/util/autenticacao-util';

@Component({
  selector: 'app-sistema-inicio',
  templateUrl: './sistema-inicio.page.html',
  styleUrls: ['./sistema-inicio.page.scss']
})
export class SistemaInicioPage implements OnInit {
  private login: Login = new Login();

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit() {}

  public goLogin(): void {
    this.router.navigateByUrl(AutenticacaoUtil.SETUP.path.front);
  }

  public goFacebook(): void {
    this.loadingService.show('Entrando, espere...');
    this.login = new Login();
    this.login.autenticacao = 'login_fake_facebook';
    this.login.senha = '0123456789';
    setTimeout(() => {
      this.loadingService.hide();
      this.autenticacaoService.login(this.login);
    }, 2000);
  }
}
