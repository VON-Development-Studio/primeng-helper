import { provideHttpClientTesting } from '@angular/common/http/testing';
import { EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MessageService } from 'primeng/api';

const testProviders: (Provider | EnvironmentProviders)[] = [
  provideHttpClientTesting(),
  provideRouter([]),

  MessageService,
];

export default testProviders;
