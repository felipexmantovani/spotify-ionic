import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TABS_CONFIG } from '../../../../tabs/tabs.config';
import { AuthService } from '../../../auth/service/auth.service';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { USER_CONFIG } from '../../user.config';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.page.html',
  styleUrls: ['./user-configuration.page.scss']
})
export class UserConfigurationPage implements OnInit {
  private pageName: string = 'Configurar';

  public user: User;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getUser();
  }

  public getPageName(): string {
    return this.pageName;
  }

  private async getUser() {
    this.user = await this.userService.getStorage();
  }

  public logout(): void {
    this.authService.logout();
  }

  public goProfile(): void {
    this.router.navigateByUrl(`${TABS_CONFIG.pathFront}${USER_CONFIG.pathFront}/profile`);
  }
}
