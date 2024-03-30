import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mtmexample1Component } from './mtmexample1.component';

describe('Mtmexample1Component', () => {
  let component: Mtmexample1Component;
  let fixture: ComponentFixture<Mtmexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mtmexample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mtmexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
