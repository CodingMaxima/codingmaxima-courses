import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGroupbyHavingComponent } from './student-groupby-having.component';

describe('StudentGroupbyHavingComponent', () => {
  let component: StudentGroupbyHavingComponent;
  let fixture: ComponentFixture<StudentGroupbyHavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGroupbyHavingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGroupbyHavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
