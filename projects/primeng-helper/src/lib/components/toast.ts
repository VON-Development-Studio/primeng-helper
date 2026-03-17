import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'von-toast',
  templateUrl: './toast.html',
  imports: [CommonModule, Toast],
})
export class VonToastComponent {}
