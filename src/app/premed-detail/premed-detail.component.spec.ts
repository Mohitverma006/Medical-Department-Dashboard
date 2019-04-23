import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremedDetailComponent } from './premed-detail.component';

describe('PremedDetailComponent', () => {
  let component: PremedDetailComponent;
  let fixture: ComponentFixture<PremedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
