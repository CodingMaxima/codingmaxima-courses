import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternSevenComponent } from './py-pattern-seven.component';

describe('PyPatternSevenComponent', () => {
  let component: PyPatternSevenComponent;
  let fixture: ComponentFixture<PyPatternSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
