import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePyVowelCountComponent } from './free-py-vowel-count.component';

describe('FreePyVowelCountComponent', () => {
  let component: FreePyVowelCountComponent;
  let fixture: ComponentFixture<FreePyVowelCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePyVowelCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePyVowelCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
