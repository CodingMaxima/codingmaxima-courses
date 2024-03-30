import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxSubarraySumComponent } from './max-subarray-sum.component';

describe('MaxSubarraySumComponent', () => {
  let component: MaxSubarraySumComponent;
  let fixture: ComponentFixture<MaxSubarraySumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxSubarraySumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxSubarraySumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
