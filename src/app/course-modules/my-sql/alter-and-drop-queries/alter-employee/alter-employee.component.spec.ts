import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterEmployeeComponent } from './alter-employee.component';

describe('AlterEmployeeComponent', () => {
  let component: AlterEmployeeComponent;
  let fixture: ComponentFixture<AlterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
