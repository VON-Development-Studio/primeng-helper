import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'autocomplete',
    loadComponent: () =>
      import('./form-validation/autocomplete/autocomplete.component').then(
        (m) => m.AutocompleteComponent
      ),
  },
  {
    path: 'datepicker',
    loadComponent: () =>
      import('./form-validation/date-picker/date-picker.component').then(
        (m) => m.DatePickerComponent
      ),
  },
  {
    path: 'inputtext',
    loadComponent: () =>
      import('./form-validation/input-text/input-text.component').then(
        (m) => m.InputTextComponent
      ),
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./form-validation/select/select.component').then(
        (m) => m.SelectComponent
      ),
  },
];
