import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { VonFormValidationBase } from './von-form-validation-base';

@Directive({
  selector: '[validation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: VonFormValidationDirective,
      multi: true,
    },
    MessageService,
  ],
})
export class VonFormValidationDirective extends VonFormValidationBase {
  protected verifyValidationMessage = () => {
    let message = '';
    let valid = false;

    if (this.validator['isEmpty']) {
      message = this.requiredMessage || this.messages.requiredMessage;
    } else if (this.validator['isNotEqual']) {
      message = this.equalToMessage || this.messages.equalToMessage;
    } else if (this.validator['isCustom']) {
      message = this.customValidationMessage || this.messages.customMessage;
    } else {
      valid = true;
    }
    return { message, valid };
  };

  protected getCustomValidators = (formValue: any): ValidationErrors => {
    return {
      ...this.validateRequired(formValue),
      ...this.validateEqualTo(formValue),
      ...this.validateCustomCondition(formValue),
    };
  };

  protected fieldNotValid = () => {
    return (
      this.validator['isEmpty'] ||
      this.validator['isNotEqual'] ||
      this.validator['isCustom']
    );
  };

  protected validateRequired: ValidatorFn = (
    value: any,
  ): ValidationErrors | null => {
    let validation = {};
    if (!this.required) {
      return {};
    }

    if (this.required && (value == null || value === '')) {
      validation = { isEmpty: true };
    }
    return validation;
  };

  protected validateEqualTo: ValidatorFn = (
    value: any,
  ): ValidationErrors | null => {
    if (!this.equalTo) {
      return {};
    }

    let validation = {};
    const isNotEqual = this.equalToIgnoreCase
      ? `${value}`.toLowerCase() !== `${this.equalTo}`.toLowerCase()
      : value !== this.equalTo;
    if (isNotEqual) {
      validation = { isNotEqual: true };
    }
    return validation;
  };

  protected validateCustomCondition: ValidatorFn = (
    _: any,
  ): ValidationErrors | null => {
    if (this.customValidation == null) {
      return {};
    }

    let validation = {};
    if (!this.customValidation) {
      validation = { isCustom: true };
    }
    return validation;
  };
}
