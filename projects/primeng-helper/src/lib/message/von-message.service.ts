import { Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class VonMessageService {
  constructor(protected messageService: MessageService) {}

  /**
   * Wrapper to call PrimeNG MessageService with an specific severity.
   * @param type Severity for the message component.
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  protected add = (
    type: string,
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
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
  protected closeAll = () => {
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
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
  ) => {
    this.add('info', message, { ...extraParams, icon: 'pi-info-circle' });
  };

  /**
   * Trigger a message with 'success' severity.
   *
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  success = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
  ) => {
    this.add('success', message, { ...extraParams, icon: 'pi-check' });
  };

  /**
   * Trigger a message with 'warn' severity.
   *
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  warning = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
  ) => {
    this.add('warn', message, {
      ...extraParams,
      icon: 'pi-exclamation-triangle',
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
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
  ) => {
    this.add('error', message, { ...extraParams, icon: 'pi-times-circle' });
  };

  // ****
  // ****
  // ****
  // TODO: Remove all the methods below this line.
  // ****

  /**
   * Trigger a message with 'success' severity.
   *
   * @deprecated Should use success instead...
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  addSuccess = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
  ) => {
    this.success(message, extraParams);
  };

  /**
   * Trigger a message with 'info' severity.
   *
   * @deprecated Should use info instead...
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  addInfo = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
  ) => {
    this.info(message, extraParams);
  };

  /**
   * Trigger a message with 'warn' severity.
   *
   * @deprecated Should use warn instead...
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  addWarning = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
  ) => {
    this.warning(message, extraParams);
  };

  /**
   * Trigger a message with 'error' severity.
   *
   * @deprecated Should use error instead...
   * @param message Detail to present in the message component.
   * @param extraParams Any additional parameter use for message service.
   */
  addError = (
    message: string,
    extraParams?: Omit<ToastMessageOptions, 'severity' | 'detail'>
  ) => {
    this.error(message, extraParams);
  };
}
