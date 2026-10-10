import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VonMessageService } from '@von-ds/primeng-helper';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ButtonDirective],
})
export class MessagesComponent {
  private readonly message = inject(VonMessageService);

  showInfoMessage = (sticky: boolean = false, icon?: string) => {
    this.showMessage('Info', this.message.info, sticky, icon);
  };

  showSuccessMessage = (sticky: boolean = false, icon?: string) => {
    this.showMessage('Success', this.message.success, sticky, icon);
  };

  showWarningMessage = (sticky: boolean = false, icon?: string) => {
    this.showMessage('Warning', this.message.warning, sticky, icon);
  };

  showErrorMessage = (sticky: boolean = false, icon?: string) => {
    this.showMessage('Error', this.message.error, sticky, icon);
  };

  cleanMessages = () => {
    this.message.clearAll();
  };

  private showMessage = (type: string, method: any, sticky?: boolean, icon?: string) => {
    const message = `${type} message content <span class="font-bold">text</span>`;
    method(message);
    method(`${message} with heading${sticky ? ' (sticky)' : ''}`, {
      summary: 'VON Development Studio',
      sticky,
      icon,
    });
  };
}
