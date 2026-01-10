import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengHelper } from './primeng-helper';

describe('PrimengHelper', () => {
  let component: PrimengHelper;
  let fixture: ComponentFixture<PrimengHelper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengHelper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengHelper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
