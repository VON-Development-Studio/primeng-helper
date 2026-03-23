import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'messages-and-toasts',
    loadComponent: () =>
      import('./messages/messages').then((m) => m.MessagesComponent),
  },
];

export default routes;
