import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternFiveComponent } from './py-pattern-five.component';

describe('PyPatternFiveComponent', () => {
  let component: PyPatternFiveComponent;
  let fixture: ComponentFixture<PyPatternFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
