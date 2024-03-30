import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePrimeNumberComponent } from './free-prime-number.component';

describe('FreePrimeNumberComponent', () => {
  let component: FreePrimeNumberComponent;
  let fixture: ComponentFixture<FreePrimeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePrimeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreePrimeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
