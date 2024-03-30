import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren3Component } from './pattren3.component';

describe('Pattren3Component', () => {
  let component: Pattren3Component;
  let fixture: ComponentFixture<Pattren3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
