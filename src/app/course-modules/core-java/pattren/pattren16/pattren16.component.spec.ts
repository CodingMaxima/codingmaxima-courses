import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren16Component } from './pattren16.component';

describe('Pattren16Component', () => {
  let component: Pattren16Component;
  let fixture: ComponentFixture<Pattren16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
