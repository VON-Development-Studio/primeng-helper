import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'confirmation-component',
  templateUrl: './confirmation.component.html',
  imports: [ConfirmDialogModule, ButtonModule, FormsModule],
  providers: [ConfirmationService],
})
export class ConfirmationComponent {
  constructor(private readonly confirmationDialog: ConfirmationService) {}

  openDialog = () => {
    this.confirmationDialog.confirm({
      accept: () => of({}).pipe(delay(1000)),
    });
  };

  openFailedDialog = () => {
    this.confirmationDialog.confirm({
      accept: () => throwError('Simulate error').pipe(delay(1000)),
    });
  };

  openSpanishDialog = () => {
    this.confirmationDialog.confirm({
      // localization: 'ES',
      accept: () => of({}).pipe(delay(1000)),
    });
  };

  openCustomMessagesDialog = () => {
    this.confirmationDialog.confirm({
      // custom: {
      //   message: 'Message Customized',
      //   save: 'Save Custom',
      // },
      accept: () => of({}).pipe(delay(1000)),
    });
  };
}
