import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapNumbersComponent } from './swap-numbers.component';

describe('SwapNumbersComponent', () => {
  let component: SwapNumbersComponent;
  let fixture: ComponentFixture<SwapNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwapNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
