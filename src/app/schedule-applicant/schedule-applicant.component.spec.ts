import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleApplicantComponent } from './schedule-applicant.component';

describe('ScheduleApplicantComponent', () => {
  let component: ScheduleApplicantComponent;
  let fixture: ComponentFixture<ScheduleApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
