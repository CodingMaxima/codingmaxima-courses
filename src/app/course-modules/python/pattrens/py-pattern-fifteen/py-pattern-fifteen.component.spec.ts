import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternFifteenComponent } from './py-pattern-fifteen.component';

describe('PyPatternFifteenComponent', () => {
  let component: PyPatternFifteenComponent;
  let fixture: ComponentFixture<PyPatternFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternFifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
