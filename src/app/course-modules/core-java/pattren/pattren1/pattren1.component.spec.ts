import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren1Component } from './pattren1.component';

describe('Pattren1Component', () => {
  let component: Pattren1Component;
  let fixture: ComponentFixture<Pattren1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
