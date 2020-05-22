import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textResume'
})
export class TextResumePipe implements PipeTransform {
  transform(value: any, ...caractersQuantity: any[]): any {
    if (value.length >= caractersQuantity) {
      return (`${value.substring(0, caractersQuantity)}...`).replace(' ...', '...');
    }
    return value;
  }
}
