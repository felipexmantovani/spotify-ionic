import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { StorageService } from './storage/storage.service';

@NgModule({
  imports: [IonicStorageModule.forRoot({
    name: 'spotify-ionic-db',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
  })],
  providers: [StorageService]
})
export class CoreServiceModule {}
