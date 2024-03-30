import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren13Component } from './pattren13.component';

describe('Pattren13Component', () => {
  let component: Pattren13Component;
  let fixture: ComponentFixture<Pattren13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
