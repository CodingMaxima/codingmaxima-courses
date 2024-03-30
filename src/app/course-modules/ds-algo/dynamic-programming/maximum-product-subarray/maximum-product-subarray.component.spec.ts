import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumProductSubarrayComponent } from './maximum-product-subarray.component';

describe('MaximumProductSubarrayComponent', () => {
  let component: MaximumProductSubarrayComponent;
  let fixture: ComponentFixture<MaximumProductSubarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximumProductSubarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaximumProductSubarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
