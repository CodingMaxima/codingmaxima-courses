import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternFourComponent } from './py-pattern-four.component';

describe('PyPatternFourComponent', () => {
  let component: PyPatternFourComponent;
  let fixture: ComponentFixture<PyPatternFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
