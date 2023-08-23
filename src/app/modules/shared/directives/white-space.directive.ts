import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]',
})
export class WhiteSpaceDirective {
  @Input() textToParse: string = '';
  @Output() textToParseChange = new EventEmitter<string>();

  constructor(private element: ElementRef) {}

  @HostListener('input')
  onChange() {
    this.parseText();
  }

  private parseText() {
    const textArea = this.element.nativeElement;
    this.textToParse = textArea.value.trim();
    this.textToParseChange.emit(this.textToParse);

    console.log({
      rawText: textArea.value,
      parsed: this.textToParse,
    });
  }
}
