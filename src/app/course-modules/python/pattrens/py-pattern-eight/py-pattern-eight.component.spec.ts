import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternEightComponent } from './py-pattern-eight.component';

describe('PyPatternEightComponent', () => {
  let component: PyPatternEightComponent;
  let fixture: ComponentFixture<PyPatternEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
