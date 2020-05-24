import { NgModule } from '@angular/core';
import { ScrollOpacityDirective } from './scroll-opacity/scroll-opacity.directive';

@NgModule({
  declarations: [ScrollOpacityDirective],
  exports: [ScrollOpacityDirective]
})
export class SharedDirectiveModule {}
