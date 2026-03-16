import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VonFormValidateDirective,
  VonFormValidationDirective,
  VonMessageService,
} from 'primeng-helper';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'select-component',
  templateUrl: './select.component.html',
  imports: [
    FormsModule,

    ButtonModule,
    CardModule,
    SelectModule,
    FloatLabelModule,

    VonFormValidateDirective,
    VonFormValidationDirective,
  ],
  providers: [VonMessageService],
})
export class SelectComponent {
  testOptions: SelectItem[] = [
    { label: 'Seleccione', value: null },
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2' },
    { label: 'Option 3', value: 'op3' },
    { label: 'Option 4', value: 'op4' },
  ];
  test1es = null;
  test2es = null;
  test3es = null;
  test4es = null;

  test1 = null;
  test2 = null;
  test3 = null;
  test4 = null;
  test5 = null;

  constructor() {}
  submitAction = () => {
    console.log('[DEV] Success');
  };
}
