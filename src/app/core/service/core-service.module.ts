import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { LoadingService } from './loading/loading.service';
import { StorageService } from './storage/storage.service';

@NgModule({
  imports: [
    IonicStorageModule.forRoot({
      name: 'spotify-ionic-db',
      driverOrder: ['localstorage', 'indexeddb', 'sqlite', 'websql']
    })
  ],
  providers: [StorageService, LoadingService]
})
export class CoreServiceModule {}
