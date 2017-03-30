import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: string, limitTo: number): string {
    return value && value.length > limitTo ? value.substr(0, limitTo-3).concat('...') : value;
  }

}
