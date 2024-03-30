import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erorhandlingproject2Component } from './erorhandlingproject2.component';

describe('Erorhandlingproject2Component', () => {
  let component: Erorhandlingproject2Component;
  let fixture: ComponentFixture<Erorhandlingproject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erorhandlingproject2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erorhandlingproject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
