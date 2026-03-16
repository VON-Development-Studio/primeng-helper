import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VonFormValidateDirective,
  VonFormValidationDirective,
  VonMessageService,
} from '@von-ds/primeng-helper';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'input-text-component',
  templateUrl: './input-text.component.html',
  imports: [
    FormsModule,

    ButtonModule,
    CardModule,
    FloatLabelModule,
    InputTextModule,

    VonFormValidateDirective,
    VonFormValidationDirective,
  ],
  providers: [VonMessageService],
})
export class InputTextComponent {
  input1es?: string;
  input2es?: string;
  input3es?: string;
  input4es?: string;
  input1?: string;
  input2?: string;
  input3?: string;
  input4?: string;
  input5?: string;

  constructor() {}

  submitAction = () => {
    console.log('[DEV] Success');
  };
}
