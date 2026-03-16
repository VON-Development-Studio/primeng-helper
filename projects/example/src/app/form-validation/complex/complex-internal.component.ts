import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { VonFormValidationDirective } from '../../../../../primeng-helper/src/lib/form-validation/von-form-validation.directive';

@Component({
  selector: 'complex-internal-component',
  templateUrl: './complex-internal.component.html',
  imports: [
    SelectModule,
    ButtonModule,
    FormsModule,
    VonFormValidationDirective,
  ],
})
export class ComplexInternalComponent {
  @Input() attribute: any = {};
  testOptions: SelectItem[] = [
    { label: 'Seleccione', value: null },
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2' },
    { label: 'Option 3', value: 'op3' },
    { label: 'Option 4', value: 'op4' },
  ];
  constructor() {}
}
