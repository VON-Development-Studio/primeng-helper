import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'custom-components',
    loadChildren: () =>
      import('./components/components.routes').then((m) => m.default),
  },
  {
    path: 'form-validation',
    loadChildren: () =>
      import('./form-validation/form-validation.routes').then((m) => m.default),
  },
];
