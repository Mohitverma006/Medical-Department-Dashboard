import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduledApplicantComponent } from './sheduled-applicant.component';

describe('SheduledApplicantComponent', () => {
  let component: SheduledApplicantComponent;
  let fixture: ComponentFixture<SheduledApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduledApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduledApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
