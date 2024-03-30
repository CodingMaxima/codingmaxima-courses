import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGroupbyHavingComponent } from './employee-groupby-having.component';

describe('EmployeeGroupbyHavingComponent', () => {
  let component: EmployeeGroupbyHavingComponent;
  let fixture: ComponentFixture<EmployeeGroupbyHavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGroupbyHavingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGroupbyHavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
