import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOperatorComponent } from './student-operator.component';

describe('StudentOperatorComponent', () => {
  let component: StudentOperatorComponent;
  let fixture: ComponentFixture<StudentOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
