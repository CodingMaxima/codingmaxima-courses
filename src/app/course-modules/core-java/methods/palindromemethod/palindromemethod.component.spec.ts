import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromemethodComponent } from './palindromemethod.component';

describe('PalindromemethodComponent', () => {
  let component: PalindromemethodComponent;
  let fixture: ComponentFixture<PalindromemethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromemethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromemethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
