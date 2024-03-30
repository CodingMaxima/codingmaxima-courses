import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternThirteenComponent } from './py-pattern-thirteen.component';

describe('PyPatternThirteenComponent', () => {
  let component: PyPatternThirteenComponent;
  let fixture: ComponentFixture<PyPatternThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
