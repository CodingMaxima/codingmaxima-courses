import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbranchComponent } from './studentbranch.component';

describe('StudentbranchComponent', () => {
  let component: StudentbranchComponent;
  let fixture: ComponentFixture<StudentbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentbranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
