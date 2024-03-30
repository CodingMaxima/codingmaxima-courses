import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternTwoComponent } from './py-pattern-two.component';

describe('PyPatternTwoComponent', () => {
  let component: PyPatternTwoComponent;
  let fixture: ComponentFixture<PyPatternTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
