import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[validate]',
})
export class VonFormValidateDirective {
  @Output('validate')
  customSubmit: EventEmitter<any> = new EventEmitter();

  protected isValid?: boolean;
  protected isFocused?: boolean;

  constructor(protected el: ElementRef) {}

  @HostListener('submit', ['$event'])
  onSubmitEvent = (e: any) => {
    e.preventDefault();
    const elements = this.el.nativeElement.querySelectorAll('[validation]');
    this.isValid = true;
    this.isFocused = false;

    elements.forEach((el: HTMLElement) => {
      el.dispatchEvent(new Event('executeValidation'));
      const elValid = el.getAttribute('validation') === 'true';
      if (this.isValid) {
        this.isValid = elValid;
      }

      const inputEl = this.getInputElement(el);
      if (!elValid && !this.isFocused) {
        this.isFocused = true;
        const ignoreValidity = this.shouldIgnoreValidity(el.tagName);
        if (!ignoreValidity) {
          inputEl.focus();
        } else {
          inputEl.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    });

    if (this.isValid) {
      this.customSubmit.emit(e);
    }
  };

  @HostListener('reset', [])
  onResetEvent = () => {
    const elements = this.el.nativeElement.querySelectorAll('[validation]');
    elements.forEach((el: HTMLElement) => {
      el.dispatchEvent(new Event('cleanValidation'));
    });
  };

  protected shouldIgnoreValidity = (elTagName: string) => {
    const tagName = `${elTagName}`.toLowerCase();
    return tagName === 'p-select';
  };

  protected getInputElement = (el: any) => {
    const tagName = `${el.tagName}`.toLowerCase();
    if (
      tagName === 'p-autocomplete' ||
      tagName === 'p-datepicker' ||
      tagName === 'p-inputnumber' ||
      tagName === 'p-password'
    ) {
      const inputEl = el.querySelector('input');
      return inputEl;
    }
    return el;
  };
}
