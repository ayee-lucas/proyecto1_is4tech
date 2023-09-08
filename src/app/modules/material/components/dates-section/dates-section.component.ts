import { Component } from '@angular/core';

@Component({
  selector: 'app-dates-section',
  templateUrl: './dates-section.component.html',
  styleUrls: ['./dates-section.component.scss']
})
export class DatesSectionComponent {
  minDate = new Date(2023, 0, 1);
  maxDate = new Date();
}
