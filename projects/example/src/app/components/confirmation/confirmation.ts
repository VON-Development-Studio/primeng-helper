import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { of, throwError } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'confirmation-component',
  templateUrl: './confirmation.html',
  imports: [ConfirmDialogModule, ButtonModule, FormsModule],
})
export class ConfirmationComponent {
  constructor(private readonly confirmationDialog: ConfirmationService) {}

  openDialogWithCustomHeader = () => {
    this.confirmationDialog.confirm({
      header: 'Custom Header',
      accept: () => of('').pipe(delay(1000)),
    });
  };

  openDialogWithCustomMessage = () => {
    this.confirmationDialog.confirm({
      message: 'Custom message to show below the header question.',
      accept: () => of('').pipe(delay(1000)),
    });
  };

  openDialogWithCustomButtons = () => {
    this.confirmationDialog.confirm({
      acceptLabel: 'Accept',
      rejectLabel: 'Cancel',
      accept: () => of('').pipe(delay(1000)),
    });
  };

  openDialogWithError = () => {
    this.confirmationDialog.confirm({
      accept: () =>
        of('').pipe(
          delay(2500),
          switchMap(() => throwError(() => new Error('Simulate error'))),
          tap({
            error: () => {
              console.warn(
                'Handle error here, for example, show a toast with the error message',
              );
            },
          }),
        ),
    });
  };
}
