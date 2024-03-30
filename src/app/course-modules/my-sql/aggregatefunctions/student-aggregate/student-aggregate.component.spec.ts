import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAggregateComponent } from './student-aggregate.component';

describe('StudentAggregateComponent', () => {
  let component: StudentAggregateComponent;
  let fixture: ComponentFixture<StudentAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAggregateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
