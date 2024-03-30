import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otoexample2Component } from './otoexample2.component';

describe('Otoexample2Component', () => {
  let component: Otoexample2Component;
  let fixture: ComponentFixture<Otoexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otoexample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otoexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
