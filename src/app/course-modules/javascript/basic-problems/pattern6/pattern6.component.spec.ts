import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattern6Component } from './pattern6.component';

describe('Pattern6Component', () => {
  let component: Pattern6Component;
  let fixture: ComponentFixture<Pattern6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattern6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattern6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
