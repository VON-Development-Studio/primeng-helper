import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '@example/app.service';
import {
  VonFormValidateDirective,
  VonFormValidationDirective,
} from '@von-ds/primeng-helper';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'inputtext-component',
  templateUrl: './inputtext.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    FormsModule,

    ButtonModule,
    CardModule,
    FloatLabelModule,
    InputTextModule,

    VonFormValidateDirective,
    VonFormValidationDirective,
  ],
})
export class InputTextComponent {
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
