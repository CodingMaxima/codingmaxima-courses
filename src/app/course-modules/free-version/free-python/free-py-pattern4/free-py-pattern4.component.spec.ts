import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePyPattern4Component } from './free-py-pattern4.component';

describe('FreePyPattern4Component', () => {
  let component: FreePyPattern4Component;
  let fixture: ComponentFixture<FreePyPattern4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePyPattern4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePyPattern4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
