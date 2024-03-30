import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePyPattern11Component } from './free-py-pattern11.component';

describe('FreePyPattern11Component', () => {
  let component: FreePyPattern11Component;
  let fixture: ComponentFixture<FreePyPattern11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePyPattern11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePyPattern11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
