import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternFourteenComponent } from './py-pattern-fourteen.component';

describe('PyPatternFourteenComponent', () => {
  let component: PyPatternFourteenComponent;
  let fixture: ComponentFixture<PyPatternFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
