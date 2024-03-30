import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternTwelveComponent } from './py-pattern-twelve.component';

describe('PyPatternTwelveComponent', () => {
  let component: PyPatternTwelveComponent;
  let fixture: ComponentFixture<PyPatternTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
