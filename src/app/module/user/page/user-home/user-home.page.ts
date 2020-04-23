import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TABS_CONFIG } from '../../../../tabs/tabs.config';
import { USER_CONFIG } from '../../user.config';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss']
})
export class UserHomePage {
  constructor(private router: Router) {}

  public goConfiguration(): void {
    this.router.navigateByUrl(`${TABS_CONFIG.pathFront}${USER_CONFIG.pathFront}/configuration`);
  }
}
