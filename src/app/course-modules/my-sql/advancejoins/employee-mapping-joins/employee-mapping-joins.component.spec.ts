import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMappingJoinsComponent } from './employee-mapping-joins.component';

describe('EmployeeMappingJoinsComponent', () => {
  let component: EmployeeMappingJoinsComponent;
  let fixture: ComponentFixture<EmployeeMappingJoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMappingJoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMappingJoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
