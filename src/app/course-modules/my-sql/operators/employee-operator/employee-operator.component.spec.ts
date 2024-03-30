import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOperatorComponent } from './employee-operator.component';

describe('EmployeeOperatorComponent', () => {
  let component: EmployeeOperatorComponent;
  let fixture: ComponentFixture<EmployeeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
