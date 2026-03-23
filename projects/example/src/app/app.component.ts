import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { VonMessageService } from '@von-ds/primeng-helper';
import { VonToastComponent } from '@von-ds/primeng-helper/components/toast';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    // Angular
    FormsModule,
    RouterOutlet,
    RouterLink,

    // PrimeNG
    Menubar,
    ToggleSwitch,

    // VON
    VonToastComponent,
    RouterLinkWithHref,
  ],
})
export class AppComponent {
  title = 'example';

  isEnglish = true;
  private readonly appService = inject(AppService);

  navigationBar: MenuItem[] = [
    {
      label: 'Custom Components',
      items: [
        {
          url: '/custom-components/messages-and-toasts',
          label: 'Messages & Toasts',
        },
      ],
    },
    {
      label: 'Form Validation',
      items: [
        {
          url: '/form-validation/autocomplete',
          label: 'AutoComplete',
        },
        {
          url: '/form-validation/datepicker',
          label: 'DatePicker',
        },
        {
          url: '/form-validation/inputtext',
          label: 'InputText',
        },
        {
          url: '/form-validation/select',
          label: 'Select',
        },
      ],
    },
  ];

  handleLanguageChange = () => {
    this.appService.changeLanguage();
  };
}
