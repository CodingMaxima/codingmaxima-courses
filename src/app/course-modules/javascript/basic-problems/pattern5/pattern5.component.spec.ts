import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern5Component } from './pattern5.component';

describe('Pattern5Component', () => {
  let component: Pattern5Component;
  let fixture: ComponentFixture<Pattern5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattern5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
