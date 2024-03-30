import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestPalindromeComponent } from './longest-palindrome.component';

describe('LongestPalindromeComponent', () => {
  let component: LongestPalindromeComponent;
  let fixture: ComponentFixture<LongestPalindromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongestPalindromeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongestPalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
