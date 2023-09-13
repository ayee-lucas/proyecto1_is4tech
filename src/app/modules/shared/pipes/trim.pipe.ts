import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {
  transform(value: string, letters: number = 5): string {
    const trimmed = value.substring(0, letters);
    return trimmed + '...';
  }
}
