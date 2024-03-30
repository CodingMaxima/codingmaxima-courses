import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegebranchComponent } from './collegebranch.component';

describe('CollegebranchComponent', () => {
  let component: CollegebranchComponent;
  let fixture: ComponentFixture<CollegebranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegebranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegebranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
