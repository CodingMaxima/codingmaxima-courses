import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthFibonacciNumberComponent } from './nth-fibonacci-number.component';

describe('NthFibonacciNumberComponent', () => {
  let component: NthFibonacciNumberComponent;
  let fixture: ComponentFixture<NthFibonacciNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NthFibonacciNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NthFibonacciNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
