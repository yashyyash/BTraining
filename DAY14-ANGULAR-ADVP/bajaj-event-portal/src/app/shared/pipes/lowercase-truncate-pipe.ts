import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercaseTruncate'
})
export class LowercaseTruncatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (typeof(value) === 'string') {
      return value.toLowerCase().substring(0, 4);
    }
    return value;
  }

}
