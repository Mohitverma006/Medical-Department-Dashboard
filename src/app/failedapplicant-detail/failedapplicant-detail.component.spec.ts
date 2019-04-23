import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedapplicantDetailComponent } from './failedapplicant-detail.component';

describe('FailedapplicantDetailComponent', () => {
  let component: FailedapplicantDetailComponent;
  let fixture: ComponentFixture<FailedapplicantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedapplicantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedapplicantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
