import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '@example/app.service';
import {
  VonFormValidateDirective,
  VonFormValidationDirective,
} from '@von-ds/primeng-helper';
import { AutoComplete } from 'primeng/autocomplete';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'autocomplete-component',
  templateUrl: './autocomplete.html',
  imports: [
    FormsModule,

    AutoComplete,
    Button,
    Card,
    FloatLabel,

    VonFormValidateDirective,
    VonFormValidationDirective,
  ],
})
export class AutoCompleteComponent {
  results: string[] = [];
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

  search = (query: string) => {
    this.results = [];
    for (let i = 0; i < 10; i++) {
      this.results.push(`${query} [${i}]`);
    }
  };
}
