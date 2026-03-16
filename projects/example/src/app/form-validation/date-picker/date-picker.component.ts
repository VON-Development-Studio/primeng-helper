import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VonFormValidateDirective,
  VonFormValidationDirective,
  VonMessageService,
} from 'primeng-helper';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'date-picker-component',
  templateUrl: './date-picker.component.html',
  imports: [
    FormsModule,

    ButtonModule,
    CardModule,
    DatePickerModule,
    FloatLabelModule,

    VonFormValidateDirective,
    VonFormValidationDirective,
  ],
  providers: [VonMessageService],
})
export class DatePickerComponent {
  test1es = null;
  test2es = null;
  test1 = null;
  test2 = null;

  constructor() {}

  submitAction = () => {
    console.log('[DEV] Success');
  };
}
