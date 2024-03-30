import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAggregateComponent } from './employee-aggregate.component';

describe('EmployeeAggregateComponent', () => {
  let component: EmployeeAggregateComponent;
  let fixture: ComponentFixture<EmployeeAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAggregateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
