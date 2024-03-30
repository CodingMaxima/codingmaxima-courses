import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mtmexample2Component } from './mtmexample2.component';

describe('Mtmexample2Component', () => {
  let component: Mtmexample2Component;
  let fixture: ComponentFixture<Mtmexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mtmexample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mtmexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
