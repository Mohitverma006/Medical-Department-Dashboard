import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduledComponent } from './sheduled.component';

describe('SheduledComponent', () => {
  let component: SheduledComponent;
  let fixture: ComponentFixture<SheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
