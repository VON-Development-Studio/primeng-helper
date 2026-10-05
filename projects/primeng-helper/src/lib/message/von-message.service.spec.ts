import { TestBed } from '@angular/core/testing';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { vi, type MockedObject } from 'vitest';
import { VonMessageService } from './von-message.service';

describe('VonMessageService', () => {
  let service: VonMessageService;
  let messageServiceSpy: MockedObject<MessageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageService,
        {
          provide: MessageService,
          useValue: {
            add: vi.fn().mockName('MessageService.add'),
          },
        },
      ],
    });
    service = TestBed.inject(VonMessageService);
    messageServiceSpy = TestBed.inject(
      MessageService,
    ) as MockedObject<MessageService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('PrimeNG Message wrapper', () => {
    it('should call message service with a type and a message', () => {
      const expectedData = { severity: 'info', detail: 'Test' };

      service['add'](expectedData.severity, expectedData.detail);

      expect(vi.mocked(messageServiceSpy.add).mock.calls).toHaveLength(1);
      expect(
        vi.when(messageServiceSpy.add).calledWith(expectedData).thenReturn(),
      ).toBeTruthy();
    });

    it('should call message service with an extra parameter', () => {
      const expectedData: ToastMessageOptions = {
        severity: 'info',
        detail: 'Test',
        closable: true,
        sticky: true,
      };

      service['add'](
        expectedData.severity!,
        expectedData.detail!,
        expectedData,
      );

      expect(vi.mocked(messageServiceSpy.add).mock.calls).toHaveLength(1);
      expect(
        vi.when(messageServiceSpy.add).calledWith(expectedData).thenReturn(),
      ).toBeTruthy();
    });
  });

  describe('VON Message wrapper', () => {
    beforeEach(() => {
      vi.spyOn<any, any>(service, 'add').mockImplementation(() => {});
    });

    it('should call message service with info severity', () => {
      const message = 'Test';
      const extraParams = { icon: 'pi pi-info-circle' };

      service.info(message);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('info', message, extraParams);
    });

    it('should call message service with info severity with parameters', () => {
      const message = 'Test';
      const extraParams = { closable: true, sticky: true };

      service.info(message, extraParams);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('info', message, {
        ...extraParams,
        icon: 'pi pi-info-circle',
      });
    });

    it('should call message service with success severity', () => {
      const message = 'Test';
      const extraParams = { icon: 'pi pi-check' };

      service.success(message);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith(
        'success',
        message,
        extraParams,
      );
    });

    it('should call message service with success severity with parameters', () => {
      const message = 'Test';
      const extraParams = { closable: true, sticky: true };

      service.success(message, extraParams);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('success', message, {
        ...extraParams,
        icon: 'pi pi-check',
      });
    });

    it('should call message service with warning severity', () => {
      const message = 'Test';
      const extraParams = { icon: 'pi pi-exclamation-triangle' };

      service.warning(message);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('warn', message, extraParams);
    });

    it('should call message service with warning severity with parameters', () => {
      const message = 'Test';
      const extraParams = { closable: true, sticky: true };

      service.warning(message, extraParams);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('warn', message, {
        ...extraParams,
        icon: 'pi pi-exclamation-triangle',
      });
    });

    it('should call message service with error severity', () => {
      const message = 'Test';
      const extraParams = { icon: 'pi pi-times-circle' };

      service.error(message);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith(
        'error',
        message,
        extraParams,
      );
    });

    it('should call message service with error severity with parameters', () => {
      const message = 'Test';
      const extraParams = { closable: true, sticky: true };

      service.error(message, extraParams);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('error', message, {
        ...extraParams,
        icon: 'pi pi-times-circle',
      });
    });
  });
});
