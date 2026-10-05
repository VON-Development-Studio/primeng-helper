import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppService } from '@example/app.service';
import { VonFormValidateDirective } from '@von-ds/primeng-helper';
import { ButtonDirective } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ComplexInternalComponent } from './complex-internal';

@Component({
  selector: 'complex-component',
  templateUrl: './complex.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    ButtonDirective,
    CardModule,

    ComplexInternalComponent,
    VonFormValidateDirective,
  ],
})
export class ComplexComponent {
  testRequired: any = {};

  private readonly appService = inject(AppService);
  readonly isEnglish = this.appService.isEnglish;

  submitAction = (form: any) => {
    console.log('[DEV] Success', form);
  };
}
