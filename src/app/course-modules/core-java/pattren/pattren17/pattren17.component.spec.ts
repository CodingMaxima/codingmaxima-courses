import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren17Component } from './pattren17.component';

describe('Pattren17Component', () => {
  let component: Pattren17Component;
  let fixture: ComponentFixture<Pattren17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
