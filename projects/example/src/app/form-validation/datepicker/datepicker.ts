import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '@example/app.service';
import {
  VonFormValidateDirective,
  VonFormValidationDirective,
} from '@von-ds/primeng-helper';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'datepicker-component',
  templateUrl: './datepicker.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,
    DatePipe,

    Button,
    Card,
    DatePicker,
    FloatLabel,

    VonFormValidateDirective,
    VonFormValidationDirective,
  ],
})
export class DatePickerComponent {
  test1 = null;
  test2 = null;
  test3 = null;
  test3Compare = new Date();

  customMessage =
    'This is a custom message for required/equal/custom validation';

  private readonly appService = inject(AppService);
  readonly isEnglish = this.appService.isEnglish;

  submitAction = () => {
    console.log('[DEV] Success');
  };
}
