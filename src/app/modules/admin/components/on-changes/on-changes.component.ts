import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss']
})
export class OnChangesComponent implements OnChanges {
  @Input() text: string | null = '';
  prevVal: string = '';
  currVal: string = '';

  ngOnChanges(changes: SimpleChanges) {
    this.prevVal = changes['text'].previousValue;
    this.currVal = changes['text'].currentValue;
  }
}
