import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PIcon } from '@primeicons/angular/p-icon';
import { Spinner } from '@primeicons/angular/spinner';
import { ButtonDirective, ButtonIconPosition } from 'primeng/button';

@Component({
  selector: '[pButton][vonButton]',
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [PIcon, Spinner, NgTemplateOutlet],
})
export class VonButtonComponent extends ButtonDirective implements OnInit {
  @Input() iconPos: ButtonIconPosition = 'left';
  @Input() icon?: string;
  @Input() primeIcon?: boolean = false;
  @Input() label?: string;

  iconIsComponent: boolean = false;
}
