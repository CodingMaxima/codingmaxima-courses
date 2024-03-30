import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternOneComponent } from './py-pattern-one.component';

describe('PyPatternOneComponent', () => {
  let component: PyPatternOneComponent;
  let fixture: ComponentFixture<PyPatternOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
