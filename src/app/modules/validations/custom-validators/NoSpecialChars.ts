import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NoSpecialChar(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const hasSpecialChar = !/^[a-zA-Z0-9]*$/.test(value);

    return hasSpecialChar ? { specialChar: true } : null;
  };
}
