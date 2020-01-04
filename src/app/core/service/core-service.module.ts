import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { ColorPaletteService } from './color-palette/color-palette.service';
import { LoadingService } from './loading/loading.service';
import { StorageService } from './storage/storage.service';

@NgModule({
  imports: [
    IonicStorageModule.forRoot({
      name: 'spotify-ionic-db',
      driverOrder: ['localstorage', 'indexeddb', 'sqlite', 'websql']
    })
  ],
  providers: [StorageService, LoadingService, ColorPaletteService]
})
export class CoreServiceModule {}
