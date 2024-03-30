import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren2Component } from './pattren2.component';

describe('Pattren2Component', () => {
  let component: Pattren2Component;
  let fixture: ComponentFixture<Pattren2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
