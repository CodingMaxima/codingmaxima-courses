import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otoexample1Component } from './otoexample1.component';

describe('Otoexample1Component', () => {
  let component: Otoexample1Component;
  let fixture: ComponentFixture<Otoexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otoexample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otoexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
