import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appComparValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ComparValidatorDirective, multi: true}]
})
export class ComparValidatorDirective implements Validator {
  @Input('appComparValidator') controlNameToCompare: string;
  debugger;
  validate(c: AbstractControl): ValidationErrors | null {
    const controlToCompare = c.root.get(this.controlNameToCompare);
    if (controlToCompare) {
      debugger;
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(
        () => {
          c.updateValueAndValidity();
          subscription.unsubscribe();
        }
      );

    }
    return controlToCompare && controlToCompare.value !== c.value ? {appComparValidator: true} : null;
  }
}
