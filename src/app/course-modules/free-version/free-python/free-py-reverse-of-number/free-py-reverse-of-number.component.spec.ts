import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePyReverseOfNumberComponent } from './free-py-reverse-of-number.component';

describe('FreePyReverseOfNumberComponent', () => {
  let component: FreePyReverseOfNumberComponent;
  let fixture: ComponentFixture<FreePyReverseOfNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePyReverseOfNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePyReverseOfNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
