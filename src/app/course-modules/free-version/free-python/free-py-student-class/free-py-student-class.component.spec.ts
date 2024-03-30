import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePyStudentClassComponent } from './free-py-student-class.component';

describe('FreePyStudentClassComponent', () => {
  let component: FreePyStudentClassComponent;
  let fixture: ComponentFixture<FreePyStudentClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePyStudentClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePyStudentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
