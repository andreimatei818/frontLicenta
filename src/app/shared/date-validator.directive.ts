import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appDateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true}]
})
export class DateValidatorDirective implements Validator {
  @Input('appDateValidator') controlNameToCompare: string;

  validate(c: AbstractControl): ValidationErrors | null {

    const controlToCompare = c.root.get(this.controlNameToCompare);
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(
        () => {
          c.updateValueAndValidity();
          subscription.unsubscribe();
        }
      );

    }
    return controlToCompare && controlToCompare.value !== c.value ? {appDateValidator: true} : null;
  }
}
