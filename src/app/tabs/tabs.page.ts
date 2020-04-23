import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LIBRARY_CONFIG } from '../module/library/library.config';
import { USER_CONFIG } from '../module/user/user.config';
import { TABS_CONFIG } from './tabs.config';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  private pathUserHome: string = `${TABS_CONFIG.pathFront}${USER_CONFIG.pathFront}/home`;
  private pathLibraryHome: string = `${TABS_CONFIG.pathFront}${LIBRARY_CONFIG.pathFront}/home`;
  private pathLibrarySearch: string = `${TABS_CONFIG.pathFront}${LIBRARY_CONFIG.pathFront}/search`;

  constructor(private navController: NavController) {}

  public goHome(): void {
    this.navController.navigateRoot(this.pathUserHome);
  }

  public goSearch(): void {
    this.navController.navigateRoot(this.pathLibrarySearch);
  }

  public goLibrary(): void {
    this.navController.navigateRoot(this.pathLibraryHome);
  }
}
