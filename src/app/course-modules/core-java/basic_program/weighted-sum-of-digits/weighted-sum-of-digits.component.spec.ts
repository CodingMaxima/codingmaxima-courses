import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightedSumOfDigitsComponent } from './weighted-sum-of-digits.component';

describe('WeightedSumOfDigitsComponent', () => {
  let component: WeightedSumOfDigitsComponent;
  let fixture: ComponentFixture<WeightedSumOfDigitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightedSumOfDigitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightedSumOfDigitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
