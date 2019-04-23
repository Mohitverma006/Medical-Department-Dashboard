import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalapplicantDetailComponent } from './finalapplicant-detail.component';

describe('FinalapplicantDetailComponent', () => {
  let component: FinalapplicantDetailComponent;
  let fixture: ComponentFixture<FinalapplicantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalapplicantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalapplicantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
