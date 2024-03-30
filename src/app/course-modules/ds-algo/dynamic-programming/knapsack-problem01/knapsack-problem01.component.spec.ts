import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnapsackProblem01Component } from './knapsack-problem01.component';

describe('KnapsackProblem01Component', () => {
  let component: KnapsackProblem01Component;
  let fixture: ComponentFixture<KnapsackProblem01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnapsackProblem01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnapsackProblem01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
