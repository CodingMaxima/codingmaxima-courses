import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeconstraintsComponent } from './employeeconstraints.component';

describe('EmployeeconstraintsComponent', () => {
  let component: EmployeeconstraintsComponent;
  let fixture: ComponentFixture<EmployeeconstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeconstraintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeconstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
