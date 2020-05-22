import { NgModule } from '@angular/core';
import { TextResumePipe } from './text-resume/text-resume.pipe';

@NgModule({
  declarations: [TextResumePipe],
  exports: [TextResumePipe]
})
export class SharedPipeModule {}
