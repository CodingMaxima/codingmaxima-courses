import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren12Component } from './pattren12.component';

describe('Pattren12Component', () => {
  let component: Pattren12Component;
  let fixture: ComponentFixture<Pattren12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
