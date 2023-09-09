import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-section',
  templateUrl: './stepper-section.component.html',
  styleUrls: ['./stepper-section.component.scss']
})
export class StepperSectionComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });

  constructor(private _formBuilder: FormBuilder) {}
}
