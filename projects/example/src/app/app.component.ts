import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
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

    // PrimeNG
    Menubar,
    ToggleSwitch,

    // VON
    VonToastComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'example';

  isEnglish = true;
  private readonly appService = inject(AppService);

  private readonly messageService = inject(VonMessageService);

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

  ngOnInit(): void {
    setTimeout(() => {
      this.messageService.info('Welcome');
      this.messageService.info('PrimeNG components helper', {
        summary: 'VON Development Studio',
      });
    }, 500);
  }

  handleLanguageChange = () => {
    this.appService.changeLanguage();
  };
}
