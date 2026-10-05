import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Spinner } from '@primeicons/angular/spinner';
import { ButtonDirective } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'von-confirm-dialog',
  templateUrl: './confirmdialog.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ButtonDirective, ConfirmDialog, Spinner],
})
export class VonConfirmDialogComponent {
  @Input() defaultIcon?: string = 'pi pi-question';
  @Input() defaultHeader?: string = 'Are you sure?';
  @Input() defaultMessage?: string = 'Do you want to proceed?';
  @Input() defaultAccept?: string = 'Yes';
  @Input() defaultReject?: string = 'No';

  @Input() loading: boolean = false;

  handleAccept = (onAccept: Function, acceptMethod?: () => Observable<any>) => {
    this.loading = true;

    if (acceptMethod != null) {
      acceptMethod()
        .pipe(
          finalize(() => {
            this.loading = false;
          }),
        )
        .subscribe(() => {
          onAccept();
        });
    } else {
      this.loading = false;
      onAccept();
    }
  };
}
