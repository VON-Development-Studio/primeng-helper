import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { VonFormValidateDirective } from '../../../../../primeng-helper/src/lib/form-validation/von-form-validate.directive';
import { ComplexInternalComponent } from './complex-internal.component';

@Component({
  selector: 'complex-component',
  template: `
    <form
      class="ui-g ui-g-6"
      (validate)="submitAction(test)"
      validation-es
      novalidate
    >
      <h2 class="ui-g-12">Formulario 1 [Requerido]</h2>

      <complex-internal-component
        [attribute]="test"
      ></complex-internal-component>

      <footer class="ui-g-12" [style.textAlign]="'right'">
        <p-button
          type="submit"
          styleClass="ui-button-success"
          label="Validar"
        ></p-button>
      </footer>
    </form>
  `,
  imports: [
    // SelectModule,
    ButtonModule,
    FormsModule,
    VonFormValidateDirective,

    ComplexInternalComponent,
    // VonFormValidationDirective,
  ],
})
export class ComplexComponent {
  test: any = {};
  constructor() {}
  submitAction = (finalObj: any) => {
    console.log('[DEV] Success', finalObj);
  };
}
