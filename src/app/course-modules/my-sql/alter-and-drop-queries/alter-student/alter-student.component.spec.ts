import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterStudentComponent } from './alter-student.component';

describe('AlterStudentComponent', () => {
  let component: AlterStudentComponent;
  let fixture: ComponentFixture<AlterStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
