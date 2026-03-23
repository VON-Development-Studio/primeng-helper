import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'autocomplete',
    loadComponent: () =>
      import('./autocomplete/autocomplete').then(
        (m) => m.AutoCompleteComponent,
      ),
  },
  {
    path: 'datepicker',
    loadComponent: () =>
      import('./datepicker/datepicker').then((m) => m.DatePickerComponent),
  },
  {
    path: 'inputtext',
    loadComponent: () =>
      import('./inputtext/inputtext').then((m) => m.InputTextComponent),
  },
  {
    path: 'select',
    loadComponent: () =>
      import('./select/select').then((m) => m.SelectComponent),
  },
];

export default routes;
