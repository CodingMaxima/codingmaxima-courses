import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightedSumComponent } from './weighted-sum.component';

describe('WeightedSumComponent', () => {
  let component: WeightedSumComponent;
  let fixture: ComponentFixture<WeightedSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightedSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightedSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
