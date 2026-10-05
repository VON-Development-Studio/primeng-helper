import { Component, DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VonFormValidateDirective } from './von-form-validate.directive';

@Component({
  template: `<div (validate)="onSubmit()">Test Element</div>`,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VonFormValidateDirective],
})
class TestHostFormValidateComponent {
  onSubmit = () => {};
}

describe('VonFormValidateDirective', () => {
  let fixture: ComponentFixture<TestHostFormValidateComponent>;
  let debugElement: DebugElement;
  let directiveInstance: VonFormValidateDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostFormValidateComponent, VonFormValidateDirective],
    });

    fixture = TestBed.createComponent(TestHostFormValidateComponent);
    debugElement = fixture.debugElement.query(
      By.directive(VonFormValidateDirective)
    );
    directiveInstance = debugElement.injector.get(VonFormValidateDirective);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directiveInstance).toBeTruthy();
  });
});
