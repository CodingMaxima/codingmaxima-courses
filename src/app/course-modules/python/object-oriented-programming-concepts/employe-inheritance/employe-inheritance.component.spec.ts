import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeInheritanceComponent } from './employe-inheritance.component';

describe('EmployeInheritanceComponent', () => {
  let component: EmployeInheritanceComponent;
  let fixture: ComponentFixture<EmployeInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeInheritanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
