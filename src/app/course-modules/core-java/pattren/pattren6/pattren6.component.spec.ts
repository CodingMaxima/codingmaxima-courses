import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren6Component } from './pattren6.component';

describe('Pattren6Component', () => {
  let component: Pattren6Component;
  let fixture: ComponentFixture<Pattren6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
