import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingService } from '../../../../core/service/loading/loading.service';
import { AuthService } from '../../../auth/service/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss']
})
export class UserCreatePage implements OnInit {
  private pageName: string = 'Criar conta';

  private user: User = new User();
  public userForm: FormGroup = null;

  public enterEmail: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public getPageName(): string {
    return this.pageName;
  }

  private createForm(): void {
    this.user = new User();
    this.userForm = this.user.createForm(this.formBuilder);
  }

  public next(): void {
    this.enterEmail = false;
  }

  public onSubmit(): void {
    this.loadingService.show('Criando a conta, espere...');
    setTimeout(() => {
      this.loadingService.hide();
      this.loadingService.show('Entrando...');
    }, 2000);
    setTimeout(() => {
      this.loadingService.hide();
      this.authService.loginFake();
    }, 3000);
  }
}
