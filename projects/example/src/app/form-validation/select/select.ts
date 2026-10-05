import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '@example/app.service';
import {
  VonFormValidateDirective,
  VonFormValidationDirective,
} from '@von-ds/primeng-helper';
import { SelectItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { Select } from 'primeng/select';

@Component({
  selector: 'select-component',
  templateUrl: './select.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,

    Button,
    Card,
    FloatLabel,
    Select,

    VonFormValidateDirective,
    VonFormValidationDirective,
  ],
})
export class SelectComponent {
  testOptions: SelectItem[] = [
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2' },
    { label: 'Option 3', value: 'op3' },
    { label: 'Option 4', value: 'op4' },
  ];

  /* For Required validation */
  test1?: string;
  test2?: string;
  test3?: string;
  test4?: string;

  /* For EqualTo validation */
  test5?: string;
  test6?: string;
  test7?: string;
  test8?: string;
  test9?: string;

  /* For Custom validation */
  test10?: string;
  test11?: string;
  test12?: string;
  test13?: string;

  customMessage =
    'This is a custom message for required/equal/custom validation';

  private readonly appService = inject(AppService);
  readonly isEnglish = this.appService.isEnglish;

  submitAction = () => {
    console.log('[DEV] Success');
  };
}
