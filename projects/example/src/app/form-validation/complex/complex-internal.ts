import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VonFormValidationDirective } from '@von-ds/primeng-helper';
import { SelectItem } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { Checkbox } from 'primeng/checkbox';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { RadioButton } from 'primeng/radiobutton';
import { Select } from 'primeng/select';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: '[complex-internal-component]',
  templateUrl: './complex-internal.html',
  imports: [
    FormsModule,

    AutoComplete,
    Checkbox,
    DatePicker,
    FloatLabel,
    InputText,
    RadioButton,
    Select,
    SelectButton,

    VonFormValidationDirective,
  ],
})
export class ComplexInternalComponent {
  @Input() form: any = {};
  @Output() formChange: EventEmitter<any> = new EventEmitter();

  testOptions: SelectItem[] = [
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2' },
    { label: 'Option 3', value: 'op3' },
    { label: 'Option 4', value: 'op4' },
  ];

  testSelectButton: SelectItem[] = [
    { label: 'Option 1', value: 'op1' },
    { label: 'Option 2', value: 'op2' },
    { label: 'Option 3', value: 'op3' },
    { label: 'Option 4', value: 'op4' },
  ];

  handleFormChange = () => {
    this.formChange.emit(this.form);
  };

  results: string[] = [];
  autoCompleteSearch = (query: string) => {
    this.results = [];
    for (let i = 0; i < 10; i++) {
      this.results.push(`${query} [${i}]`);
    }
  };
}
