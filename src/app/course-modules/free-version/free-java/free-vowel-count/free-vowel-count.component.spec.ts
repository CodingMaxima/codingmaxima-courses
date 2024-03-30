import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeVowelCountComponent } from './free-vowel-count.component';

describe('FreeVowelCountComponent', () => {
  let component: FreeVowelCountComponent;
  let fixture: ComponentFixture<FreeVowelCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeVowelCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeVowelCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
