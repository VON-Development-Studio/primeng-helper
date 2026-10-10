import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Toast, ToastModeType } from 'primeng/toast';

@Component({
  selector: 'von-toast,[von-toast]',
  templateUrl: './toast.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Toast],
})
export class VonToastComponent {
  @Input() mode: ToastModeType = 'expanded';
  @Input() stackVisibleLimit: number = 5;
}
