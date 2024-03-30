import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePyFactorialComponent } from './free-py-factorial.component';

describe('FreePyFactorialComponent', () => {
  let component: FreePyFactorialComponent;
  let fixture: ComponentFixture<FreePyFactorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePyFactorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePyFactorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
