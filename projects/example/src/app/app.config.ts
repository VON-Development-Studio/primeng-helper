import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { VonMessageService } from '@von-ds/primeng-helper';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { PRIMEUI_LICENSE_KEY } from '../environments/primeng.config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      license: PRIMEUI_LICENSE_KEY,
      ripple: true,
      theme: {
        preset: Aura,
        // options: {
        //   cssLayer: {
        //     name: 'primeng',
        //     order: 'tailwind, primeng'
        //   }
        // }
      },
    }),

    MessageService,
    VonMessageService,
    ConfirmationService,
  ],
};
