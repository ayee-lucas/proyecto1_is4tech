import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoSpecialChar } from '../../custom-validators/NoSpecialChars';
import { NoWhiteSpace } from '../../custom-validators/NoWhiteSpace';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss']
})
export class ValidationsComponent {
  today = new Date();
  newClient = false;

  clientForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      NoSpecialChar(),
      NoWhiteSpace()
    ]),
    birth: new FormControl(new Date(), [Validators.required]),
    nit: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required]),
    emergencyNumber: new FormControl(''),
    address: new FormControl('')
  });

  onSubmit() {
    console.log(this.clientForm.value);
  }
}
