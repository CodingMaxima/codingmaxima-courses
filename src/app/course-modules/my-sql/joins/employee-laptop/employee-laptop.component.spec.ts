import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLaptopComponent } from './employee-laptop.component';

describe('EmployeeLaptopComponent', () => {
  let component: EmployeeLaptopComponent;
  let fixture: ComponentFixture<EmployeeLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
