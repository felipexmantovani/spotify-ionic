import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from '../../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  private login: Login = new Login();
  public loginForm: FormGroup = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.criarForm();
  }

  private criarForm(): void {
    this.login = new Login();
    this.loginForm = this.login.criarForm(this.formBuilder);
  }

  public onSubmit(): void {}

  public goEsqueciSenha(): void {}
}
