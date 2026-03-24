import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'messages-and-toasts',
    loadComponent: () =>
      import('./messages/messages').then((m) => m.MessagesComponent),
  },
  {
    path: 'confirmation',
    loadComponent: () =>
      import('./confirmation/confirmation').then((m) => m.ConfirmationComponent),
  },
];

export default routes;
