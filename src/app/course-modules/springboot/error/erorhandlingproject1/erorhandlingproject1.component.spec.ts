import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erorhandlingproject1Component } from './erorhandlingproject1.component';

describe('Erorhandlingproject1Component', () => {
  let component: Erorhandlingproject1Component;
  let fixture: ComponentFixture<Erorhandlingproject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erorhandlingproject1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erorhandlingproject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
