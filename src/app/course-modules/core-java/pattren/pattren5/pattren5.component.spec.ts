import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren5Component } from './pattren5.component';

describe('Pattren5Component', () => {
  let component: Pattren5Component;
  let fixture: ComponentFixture<Pattren5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
