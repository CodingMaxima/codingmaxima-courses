import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternNineComponent } from './py-pattern-nine.component';

describe('PyPatternNineComponent', () => {
  let component: PyPatternNineComponent;
  let fixture: ComponentFixture<PyPatternNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
