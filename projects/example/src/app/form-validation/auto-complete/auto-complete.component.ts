import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  VonFormValidateDirective,
  VonFormValidationDirective,
  VonMessageService,
} from 'primeng-helper';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'auto-complete-component',
  templateUrl: './auto-complete.component.html',
  imports: [
    FormsModule,

    AutoCompleteModule,
    ButtonModule,
    CardModule,
    FloatLabelModule,

    VonFormValidateDirective,
    VonFormValidationDirective,
  ],
  providers: [VonMessageService],
})
export class AutoCompleteComponent {
  results: string[] = [];
  test1?: string;
  test2?: string;

  constructor() {}

  submitAction = () => {
    console.log('[DEV] Success');
  };

  search = (query: string) => {
    this.results = [];
    for (let i = 0; i < 10; i++) {
      this.results.push(`${query} [${i}]`);
    }
  };
}
