import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyPatternTenComponent } from './py-pattern-ten.component';

describe('PyPatternTenComponent', () => {
  let component: PyPatternTenComponent;
  let fixture: ComponentFixture<PyPatternTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyPatternTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyPatternTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
