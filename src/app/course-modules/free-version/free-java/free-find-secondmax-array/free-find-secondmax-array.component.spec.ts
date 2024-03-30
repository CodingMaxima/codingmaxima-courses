import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeFindSecondmaxArrayComponent } from './free-find-secondmax-array.component';

describe('FreeFindSecondmaxArrayComponent', () => {
  let component: FreeFindSecondmaxArrayComponent;
  let fixture: ComponentFixture<FreeFindSecondmaxArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeFindSecondmaxArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeFindSecondmaxArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
