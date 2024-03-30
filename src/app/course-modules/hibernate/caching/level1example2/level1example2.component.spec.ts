import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1example2Component } from './level1example2.component';

describe('Level1example2Component', () => {
  let component: Level1example2Component;
  let fixture: ComponentFixture<Level1example2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level1example2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1example2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
