import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternThreeComponent } from './py-pattern-three.component';

describe('PyPatternThreeComponent', () => {
  let component: PyPatternThreeComponent;
  let fixture: ComponentFixture<PyPatternThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
