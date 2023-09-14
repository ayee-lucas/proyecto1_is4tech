import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function NoWhiteSpace(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const hasWhiteSpaces = /^\\s|\\s$/.test(value);

    return hasWhiteSpaces ? { whitespaces: true } : null;
  };
}
