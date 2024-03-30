import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Otmexample2Component } from './otmexample2.component';

describe('Otmexample2Component', () => {
  let component: Otmexample2Component;
  let fixture: ComponentFixture<Otmexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Otmexample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Otmexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
