import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VonRequiredMessageDirective } from './von-required-message.directive';

@Component({
  template: `<div required-message>Test Element</div>`,
  imports: [VonRequiredMessageDirective],
})
class TestRequiredMessageHostComponent {}

describe('VonRequiredMessageDirective', () => {
  let fixture: ComponentFixture<TestRequiredMessageHostComponent>;
  let debugElement: DebugElement;
  let directiveInstance: VonRequiredMessageDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestRequiredMessageHostComponent, VonRequiredMessageDirective],
    });

    fixture = TestBed.createComponent(TestRequiredMessageHostComponent);
    debugElement = fixture.debugElement.query(
      By.directive(VonRequiredMessageDirective)
    );
    directiveInstance = debugElement.injector.get(VonRequiredMessageDirective);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directiveInstance).toBeTruthy();
  });
});
