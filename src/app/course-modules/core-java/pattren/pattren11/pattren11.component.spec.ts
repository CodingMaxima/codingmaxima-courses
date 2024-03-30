import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren11Component } from './pattren11.component';

describe('Pattren11Component', () => {
  let component: Pattren11Component;
  let fixture: ComponentFixture<Pattren11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
