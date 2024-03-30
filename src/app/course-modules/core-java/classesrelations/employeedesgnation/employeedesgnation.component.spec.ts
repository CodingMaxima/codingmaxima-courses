import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedesgnationComponent } from './employeedesgnation.component';

describe('EmployeedesgnationComponent', () => {
  let component: EmployeedesgnationComponent;
  let fixture: ComponentFixture<EmployeedesgnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedesgnationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedesgnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
