import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss']
})
export class ValidationsComponent {
  today = new Date();
  newClient = false;

  clientForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
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
