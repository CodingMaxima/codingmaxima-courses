import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromestringComponent } from './palindromestring.component';

describe('PalindromestringComponent', () => {
  let component: PalindromestringComponent;
  let fixture: ComponentFixture<PalindromestringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromestringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
