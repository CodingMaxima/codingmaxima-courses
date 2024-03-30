import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapfirstlastComponent } from './swapfirstlast.component';

describe('SwapfirstlastComponent', () => {
  let component: SwapfirstlastComponent;
  let fixture: ComponentFixture<SwapfirstlastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapfirstlastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapfirstlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
