import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-section',
  templateUrl: './stepper-section.component.html',
  styleUrls: ['./stepper-section.component.scss']
})
export class StepperSectionComponent {
  dpiRequired = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', [Validators.minLength(13), Validators.maxLength(13)]]
  });

  maxDate = new Date();

  constructor(private _formBuilder: FormBuilder) {}
}
