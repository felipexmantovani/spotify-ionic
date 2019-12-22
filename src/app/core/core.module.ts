import { NgModule } from '@angular/core';
import { CoreServiceModule } from './service/core-service.module';

@NgModule({
  imports: [CoreServiceModule],
  exports: [CoreServiceModule]
})
export class CoreModule {}
