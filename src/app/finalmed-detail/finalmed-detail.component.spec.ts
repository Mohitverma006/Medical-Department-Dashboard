import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalmedDetailComponent } from './finalmed-detail.component';

describe('FinalmedDetailComponent', () => {
  let component: FinalmedDetailComponent;
  let fixture: ComponentFixture<FinalmedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalmedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalmedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
