import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternElevenComponent } from './py-pattern-eleven.component';

describe('PyPatternElevenComponent', () => {
  let component: PyPatternElevenComponent;
  let fixture: ComponentFixture<PyPatternElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
