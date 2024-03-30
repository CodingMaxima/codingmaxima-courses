import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternSixComponent } from './py-pattern-six.component';

describe('PyPatternSixComponent', () => {
  let component: PyPatternSixComponent;
  let fixture: ComponentFixture<PyPatternSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
