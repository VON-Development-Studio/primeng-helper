import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { FormControl, ValidationErrors, Validator } from '@angular/forms';
import { VonMessageService } from '../message/von-message.service';
import { VonLocalizationModel } from '../models/von-localization.model';
import { VALIDATION_MESSAGES } from '../utils/von-translations';

@Directive()
export abstract class VonFormValidationBase implements OnInit, Validator {
  @Input() ngModel?: any;
  @Output() ngModelChange = new EventEmitter<any>();

  @Input() name?: string;
  @Input() customName?: string;

  @Input() required?: boolean | string;
  @Input() requiredName?: string;
  @Input() requiredMessage?: string;
  @Input() equalTo?: any;
  @Input() equalIgnoreCase?: boolean;
  @Input() equalToMessage?: string;
  @Input() customValidator?: boolean;
  @Input() customMessage?: string;

  protected validator: ValidationErrors = {};
  protected message = '';
  protected messages: VonLocalizationModel = {
    requiredMessage: '',
    equalToMessage: '',
    customMessage: '',
  };
  protected $label?: HTMLElement;

  constructor(
    protected element?: ElementRef,
    protected renderer?: Renderer2,
    protected messageService?: VonMessageService
  ) {}

  ngOnInit(): void {
    const $closestFormEl =
      this.element?.nativeElement.form ||
      this.getClosestForm(this.element?.nativeElement);
    const isValidationEn = !$closestFormEl.hasAttribute('validation-es');
    this.messages = isValidationEn
      ? VALIDATION_MESSAGES.EN
      : VALIDATION_MESSAGES.ES;

    if (this.required != null && this.required === '') {
      this.required = true;
    }

    this.$label = $closestFormEl.querySelector(`label[for='${this.name}']`);
    if (this.$label) {
      this.renderer?.addClass(this.$label, 'field__label');
      if (this.required) {
        this.renderer?.addClass(this.$label, 'field__label--required');
      }
    }

    this.renderer?.setAttribute(
      this.element?.nativeElement,
      'validation',
      'true'
    );

    this.renderer?.addClass(
      this.element?.nativeElement,
      this.verifyClassName(this.element?.nativeElement)
    );
  }

  validate(formValue: FormControl): ValidationErrors {
    this.validator = this.getCustomValidators(formValue.value);
    this.runValidation();
    return this.validator;
  }

  @HostListener('executeValidation') executeValidationEvent = () => {
    this.validator = this.getCustomValidators(this.ngModel);
    const labelText = this.requiredName ?? this.getLabelText();
    const { message, valid } = this.verifyValidationMessage();

    if (!valid) {
      this.renderer?.addClass(this.element?.nativeElement, 'field__error');
      this.messageService?.error(message.replace('${name}', labelText), {
        sticky: false,
      });
      // this.appMessageService.addError(
      //   message.replace('${name}', labelText),
      //   null,
      //   false
      // );
    } else {
      this.renderer?.removeClass(this.element?.nativeElement, 'field__error');
    }
    this.element?.nativeElement.setAttribute('validation', valid);
  };

  protected abstract verifyValidationMessage(): {
    message: string;
    valid: boolean;
  };

  protected abstract getCustomValidators(value: any): ValidationErrors;

  protected abstract fieldNotValid(): boolean;

  protected getClosestForm = (el: HTMLElement): HTMLElement => {
    const tagName = `${el.tagName}`.toLowerCase();
    if (tagName === 'form' || tagName === 'body') {
      return el;
    }

    const parent = el.parentElement;
    if (parent) {
      return this.getClosestForm(parent);
    }
    return el;
  };

  protected getLabelText = (): string => {
    let labelText = this.name || '';
    if (this.customName) {
      labelText = this.customName;
    }
    if (this.$label && this.$label.innerText) {
      labelText = this.$label.innerText;
    }
    return labelText;
  };

  protected runValidation = (): void => {
    const isNotValid = this.fieldNotValid();
    if (isNotValid) {
      return;
    }
    this.renderer?.removeClass(this.element?.nativeElement, 'field__error');
  };

  protected verifyClassName = (el: HTMLElement): string => {
    const tagName = `${el.tagName}`.toLowerCase();
    switch (tagName) {
      case 'p-autocomplete':
        return 'field__autocomplete';
      case 'p-datepicker':
        return 'field__datepicker';
      case 'input':
        return 'field__input';
      case 'p-select':
        return 'field__select';
      case 'textarea':
        return 'field__textarea';
      case 'p-inputnumber':
        return 'field__input-number';
      case 'p-password':
        return 'field__password';
      case 'p-checkbox':
        return 'field__checkbox';
    }
    return 'field__no-defined';
  };
}
