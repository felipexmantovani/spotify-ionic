import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringResume'
})
export class StringResumePipe implements PipeTransform {
  transform(value: any, ...caractersQuantity: any[]): any {
    if (value.length >= caractersQuantity) {
      return (`${value.substring(0, caractersQuantity).trim()}...`);
    }
    return value;
  }
}
