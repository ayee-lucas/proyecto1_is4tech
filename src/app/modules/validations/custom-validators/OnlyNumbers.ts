import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NoLetters(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const hasLetters = !/^[0-9]*$/.test(value);

    return hasLetters ? { letters: true } : null;
  };
}
