import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren9Component } from './pattren9.component';

describe('Pattren9Component', () => {
  let component: Pattren9Component;
  let fixture: ComponentFixture<Pattren9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
