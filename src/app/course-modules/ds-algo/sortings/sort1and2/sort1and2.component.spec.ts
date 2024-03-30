import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sort1and2Component } from './sort1and2.component';

describe('Sort1and2Component', () => {
  let component: Sort1and2Component;
  let fixture: ComponentFixture<Sort1and2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sort1and2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sort1and2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
