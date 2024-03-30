import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharVowelComponent } from './char-vowel.component';

describe('CharVowelComponent', () => {
  let component: CharVowelComponent;
  let fixture: ComponentFixture<CharVowelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharVowelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharVowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
