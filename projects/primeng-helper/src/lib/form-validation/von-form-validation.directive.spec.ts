import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { VonFormValidationDirective } from './von-form-validation.directive';

@Component({
  template: `<div validation>Test Element</div>`,
  imports: [VonFormValidationDirective],
  providers: [MessageService],
})
class TestFormValidationHostComponent {}

describe('FormValidationDirective', () => {
  let fixture: ComponentFixture<TestFormValidationHostComponent>;
  let debugElement: DebugElement;
  let directiveInstance: VonFormValidationDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestFormValidationHostComponent, VonFormValidationDirective],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(TestFormValidationHostComponent);
    debugElement = fixture.debugElement.query(
      By.directive(VonFormValidationDirective)
    );
    directiveInstance = debugElement.injector.get(VonFormValidationDirective);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directiveInstance).toBeTruthy();
  });
});
