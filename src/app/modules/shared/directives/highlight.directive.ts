import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() rgbColor = '';
  constructor(private element: ElementRef) {}

  @HostListener('mouseover')
  onOver() {
    console.log(this.rgbColor);
    this.element.nativeElement.style.textDecoration = 'underline';
    if (this.rgbColor) {
      this.element.nativeElement.style.textDecorationColor = this.rgbColor;
    }
  }

  @HostListener('mouseout')
  onOut() {
    console.log(this.rgbColor);
    this.element.nativeElement.style.textDecoration = 'unset';
  }
}
