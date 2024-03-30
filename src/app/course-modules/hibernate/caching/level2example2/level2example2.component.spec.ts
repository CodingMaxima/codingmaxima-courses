import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2example2Component } from './level2example2.component';

describe('Level2example2Component', () => {
  let component: Level2example2Component;
  let fixture: ComponentFixture<Level2example2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2example2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2example2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
