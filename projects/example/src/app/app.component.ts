import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
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

    // PrimeNG
    Menubar,
    ToggleSwitch,

    // VON
    VonToastComponent,
  ],
})
export class AppComponent {
  title = 'example';

  isEnglish = true;
  private readonly appService = inject(AppService);

  navigationBar: MenuItem[] = [
    {
      label: 'Form Validation',
      items: [
        {
          url: '/autocomplete',
          label: 'AutoComplete',
        },
        {
          url: '/datepicker',
          label: 'DatePicker',
        },
        {
          url: '/inputtext',
          label: 'InputText',
        },
        {
          url: '/select',
          label: 'Select',
        },
        {
          url: '/complex',
          label: 'Complex',
        },
      ],
    },
    {
      url: '/confirmation-dialog',
      label: 'Confirmation Dialog',
    },
  ];

  handleLanguageChange = () => {
    this.appService.changeLanguage();
  };
}
