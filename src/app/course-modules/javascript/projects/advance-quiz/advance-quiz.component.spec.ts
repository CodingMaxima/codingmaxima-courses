import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceQuizComponent } from './advance-quiz.component';

describe('AdvanceQuizComponent', () => {
  let component: AdvanceQuizComponent;
  let fixture: ComponentFixture<AdvanceQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
