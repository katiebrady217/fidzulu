import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value !== 'string' || !value) {
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

