import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizingCodeSplitingComponent } from './optimizing-code-spliting.component';

describe('OptimizingCodeSplitingComponent', () => {
  let component: OptimizingCodeSplitingComponent;
  let fixture: ComponentFixture<OptimizingCodeSplitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizingCodeSplitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizingCodeSplitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
