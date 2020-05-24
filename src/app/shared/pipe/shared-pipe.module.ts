import { NgModule } from '@angular/core';
import { StringResumePipe } from './string-resume/string-resume.pipe';

@NgModule({
  declarations: [StringResumePipe],
  exports: [StringResumePipe]
})
export class SharedPipeModule {}
