import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otmexample1Component } from './otmexample1.component';

describe('Otmexample1Component', () => {
  let component: Otmexample1Component;
  let fixture: ComponentFixture<Otmexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otmexample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otmexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
