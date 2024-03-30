import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaptwonumbersComponent } from './swaptwonumbers.component';

describe('SwaptwonumbersComponent', () => {
  let component: SwaptwonumbersComponent;
  let fixture: ComponentFixture<SwaptwonumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwaptwonumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwaptwonumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
