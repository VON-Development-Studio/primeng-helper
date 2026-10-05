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

  showInfoMessage = (sticky: boolean = false) => {
    this.showMessage('Info', this.message.info, sticky);
  };

  showSuccessMessage = (sticky: boolean = false) => {
    this.showMessage('Success', this.message.success, sticky);
  };

  showWarningMessage = (sticky: boolean = false) => {
    this.showMessage('Warning', this.message.warning, sticky);
  };

  showErrorMessage = (sticky: boolean = false) => {
    this.showMessage('Error', this.message.error, sticky);
  };

  cleanMessages = () => {
    this.message.clearAll();
  };

  private showMessage = (type: string, method: any, sticky?: boolean) => {
    const message = `${type} message content`;
    method(message);
    method(`${message} with heading${sticky ? ' (sticky)' : ''}`, {
      summary: 'VON Development Studio',
      sticky,
    });
  };
}
