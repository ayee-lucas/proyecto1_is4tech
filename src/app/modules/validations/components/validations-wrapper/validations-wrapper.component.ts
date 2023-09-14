import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoSpecialChar } from '../../custom-validators/NoSpecialChars';
import { NoWhiteSpace } from '../../custom-validators/NoWhiteSpace';
import { NoLetters } from '../../custom-validators/OnlyNumbers';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss']
})
export class ValidationsComponent {
  today = new Date();
  newClient = false;
  showCode = false;

  clientForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      NoSpecialChar(),
      NoWhiteSpace()
    ]),
    birth: new FormControl(new Date(), [Validators.required]),
    nit: new FormControl('', [
      Validators.required,
      NoLetters(),
      NoSpecialChar(),
      NoWhiteSpace()
    ]),
    comment: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
      NoSpecialChar(),
      NoWhiteSpace()
    ]),
    emergencyNumber: new FormControl('', [
      Validators.maxLength(8),
      NoSpecialChar(),
      NoWhiteSpace()
    ]),
    address: new FormControl('', [NoSpecialChar(), NoWhiteSpace()])
  });

  onSubmit() {
    console.log(this.clientForm.value);
  }

  clear() {
    this.showCode = false;
    this.clientForm.reset();
  }
}
