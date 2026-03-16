import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  /**
   * true: means English
   * false: means Spanish
   */
  private readonly _isEnglish = signal(true);

  readonly isEnglish = this._isEnglish.asReadonly();

  changeLanguage = () => {
    this._isEnglish.update((isEnglish) => !isEnglish);
  };
}
