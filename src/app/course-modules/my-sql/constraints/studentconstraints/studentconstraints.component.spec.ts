import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentconstraintsComponent } from './studentconstraints.component';

describe('StudentconstraintsComponent', () => {
  let component: StudentconstraintsComponent;
  let fixture: ComponentFixture<StudentconstraintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentconstraintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentconstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
