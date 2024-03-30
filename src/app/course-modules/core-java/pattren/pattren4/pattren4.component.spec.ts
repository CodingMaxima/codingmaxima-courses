import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren4Component } from './pattren4.component';

describe('Pattren4Component', () => {
  let component: Pattren4Component;
  let fixture: ComponentFixture<Pattren4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
