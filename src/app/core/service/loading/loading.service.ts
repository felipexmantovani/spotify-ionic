import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoadingService {
  constructor(private loadingController: LoadingController) {}

  public async show(message?: string, duration?: number): Promise<any> {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: duration ? duration : 5000,
      message: message ? message : 'Aguarde...',
      translucent: true
    });
    return await loading.present();
  }

  public hide(): void {
    this.loadingController.dismiss();
  }
}
