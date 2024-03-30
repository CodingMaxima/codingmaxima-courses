import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren10Component } from './pattren10.component';

describe('Pattren10Component', () => {
  let component: Pattren10Component;
  let fixture: ComponentFixture<Pattren10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
