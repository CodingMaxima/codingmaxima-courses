import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reverselist2Component } from './reverselist2.component';

describe('Reverselist2Component', () => {
  let component: Reverselist2Component;
  let fixture: ComponentFixture<Reverselist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reverselist2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reverselist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
