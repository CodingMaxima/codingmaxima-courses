import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren8Component } from './pattren8.component';

describe('Pattren8Component', () => {
  let component: Pattren8Component;
  let fixture: ComponentFixture<Pattren8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
