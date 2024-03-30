import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisIntroComponent } from './analysis-intro.component';

describe('AnalysisIntroComponent', () => {
  let component: AnalysisIntroComponent;
  let fixture: ComponentFixture<AnalysisIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
