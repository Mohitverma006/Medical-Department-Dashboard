import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingforScheduleComponent } from './pendingfor-schedule.component';

describe('PendingforScheduleComponent', () => {
  let component: PendingforScheduleComponent;
  let fixture: ComponentFixture<PendingforScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingforScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingforScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
