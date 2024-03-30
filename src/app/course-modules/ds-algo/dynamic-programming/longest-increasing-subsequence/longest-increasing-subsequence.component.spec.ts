import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestIncreasingSubsequenceComponent } from './longest-increasing-subsequence.component';

describe('LongestIncreasingSubsequenceComponent', () => {
  let component: LongestIncreasingSubsequenceComponent;
  let fixture: ComponentFixture<LongestIncreasingSubsequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongestIncreasingSubsequenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongestIncreasingSubsequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
