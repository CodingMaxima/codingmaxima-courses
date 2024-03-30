import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2example3Component } from './level2example3.component';

describe('Level2example3Component', () => {
  let component: Level2example3Component;
  let fixture: ComponentFixture<Level2example3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2example3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2example3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
