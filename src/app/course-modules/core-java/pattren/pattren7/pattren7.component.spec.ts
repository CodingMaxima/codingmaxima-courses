import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren7Component } from './pattren7.component';

describe('Pattren7Component', () => {
  let component: Pattren7Component;
  let fixture: ComponentFixture<Pattren7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
