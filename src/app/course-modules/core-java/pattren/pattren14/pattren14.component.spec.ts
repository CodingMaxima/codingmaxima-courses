import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren14Component } from './pattren14.component';

describe('Pattren14Component', () => {
  let component: Pattren14Component;
  let fixture: ComponentFixture<Pattren14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
