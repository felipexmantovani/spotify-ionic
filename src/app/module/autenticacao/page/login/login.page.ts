import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from '../../model/login';
import { AutenticacaoService } from '../../service/autenticacao.service';
import { Router } from '@angular/router';
import { AutenticacaoUtil } from '../../util/autenticacao-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  private login: Login = new Login();
  public loginForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.criarForm();
  }

  private criarForm(): void {
    this.login = new Login();
    this.loginForm = this.login.criarForm(this.formBuilder);
  }

  public onSubmit(): void {
    this.login = this.loginForm.value;
    this.autenticacaoService.login(this.login);
  }

  public goEsqueceuSenha() {
    this.router.navigateByUrl(`${AutenticacaoUtil.SETUP.path.front}/esqueceu-senha`);
  }
}
