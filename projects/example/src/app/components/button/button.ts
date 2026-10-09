import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VonButtonComponent } from '@von-ds/primeng-helper';
import { ButtonDirective } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'button-component',
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    // Ng
    FormsModule,

    // PrimeNG
    ButtonDirective,
    ConfirmDialogModule,

    // VON
    VonButtonComponent,
  ],
})
export class ButtonComponent {
  label: string = 'Label [V]';
  icon: string = 'pi pi-check';
}
