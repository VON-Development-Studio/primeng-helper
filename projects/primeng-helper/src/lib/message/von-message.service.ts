import { inject, Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class VonMessageService {
  protected readonly messageService = inject(MessageService);

  /**
   * Wrapper to call PrimeNG MessageService with an specific severity.
   * @param type Severity for the message component.
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  protected add = (
    type: string,
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>,
  ) => {
    this.messageService.add({
      severity: type,
      detail: message,
      ...extraParams,
    });
  };

  /**
   * Removes all messages in queue;
   */
  clearAll = () => {
    this.messageService.clear();
  };

  /**
   * Trigger a message with 'info' severity.
   *
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  info = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>,
  ) => {
    this.add('info', message, { ...extraParams, icon: 'pi pi-info-circle' });
  };

  /**
   * Trigger a message with 'success' severity.
   *
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  success = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>,
  ) => {
    this.add('success', message, { ...extraParams, icon: 'pi pi-check' });
  };

  /**
   * Trigger a message with 'warn' severity.
   *
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  warning = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>,
  ) => {
    this.add('warn', message, {
      ...extraParams,
      icon: 'pi pi-exclamation-triangle',
    });
  };

  /**
   * Trigger a message with 'error' severity.
   *
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  error = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>,
  ) => {
    this.add('error', message, { ...extraParams, icon: 'pi pi-times-circle' });
  };
}
