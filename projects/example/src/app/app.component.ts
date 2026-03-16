import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    // Angular
    RouterOutlet,
    RouterLink,

    // PrimeNG
    ButtonModule,
    MenubarModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class AppComponent {
  title = 'example';

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
}
