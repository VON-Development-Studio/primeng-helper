import { TestBed } from '@angular/core/testing';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { VonMessageService } from './von-message.service';

describe('VonMessageService', () => {
  let service: VonMessageService;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageService,
        {
          provide: MessageService,
          useValue: jasmine.createSpyObj('MessageService', ['add']),
        },
      ],
    });
    service = TestBed.inject(VonMessageService);
    messageServiceSpy = TestBed.inject(
      MessageService
    ) as jasmine.SpyObj<MessageService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('PrimeNG Message wrapper', () => {
    it('should call message service with a type and a message', () => {
      const expectedData = { severity: 'info', detail: 'Test' };

      service['add'](expectedData.severity, expectedData.detail);

      expect(messageServiceSpy.add.calls.count()).toBe(1);
      expect(messageServiceSpy.add.withArgs(expectedData)).toBeTruthy();
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
        expectedData
      );

      expect(messageServiceSpy.add.calls.count()).toBe(1);
      expect(messageServiceSpy.add.withArgs(expectedData)).toBeTruthy();
    });
  });

  describe('VON Message wrapper', () => {
    beforeEach(() => {
      spyOn<any>(service, 'add').and.callFake(() => {});
    });

    it('should call message service with info severity', () => {
      const message = 'Test';
      const extraParams = { icon: 'pi-info-circle' };

      service['addInfo'](message);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('info', message, extraParams);
    });

    it('should call message service with info severity with parameters', () => {
      const message = 'Test';
      const extraParams = { closable: true, sticky: true };

      service['addInfo'](message, extraParams);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('info', message, {
        ...extraParams,
        icon: 'pi-info-circle',
      });
    });

    it('should call message service with success severity', () => {
      const message = 'Test';
      const extraParams = { icon: 'pi-check' };

      service['addSuccess'](message);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith(
        'success',
        message,
        extraParams
      );
    });

    it('should call message service with success severity with parameters', () => {
      const message = 'Test';
      const extraParams = { closable: true, sticky: true };

      service['addSuccess'](message, extraParams);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('success', message, {
        ...extraParams,
        icon: 'pi-check',
      });
    });

    it('should call message service with warning severity', () => {
      const message = 'Test';
      const extraParams = { icon: 'pi-exclamation-triangle' };

      service['addWarning'](message);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('warn', message, extraParams);
    });

    it('should call message service with warning severity with parameters', () => {
      const message = 'Test';
      const extraParams = { closable: true, sticky: true };

      service['addWarning'](message, extraParams);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('warn', message, {
        ...extraParams,
        icon: 'pi-exclamation-triangle',
      });
    });

    it('should call message service with error severity', () => {
      const message = 'Test';
      const extraParams = { icon: 'pi-times-circle' };

      service['addError'](message);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith(
        'error',
        message,
        extraParams
      );
    });

    it('should call message service with error severity with parameters', () => {
      const message = 'Test';
      const extraParams = { closable: true, sticky: true };

      service['addError'](message, extraParams);

      expect(service['add']).toHaveBeenCalled();
      expect(service['add']).toHaveBeenCalledWith('error', message, {
        ...extraParams,
        icon: 'pi-times-circle',
      });
    });
  });
});
