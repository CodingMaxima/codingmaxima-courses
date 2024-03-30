import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetSumProblemComponent } from './subset-sum-problem.component';

describe('SubsetSumProblemComponent', () => {
  let component: SubsetSumProblemComponent;
  let fixture: ComponentFixture<SubsetSumProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetSumProblemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsetSumProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
