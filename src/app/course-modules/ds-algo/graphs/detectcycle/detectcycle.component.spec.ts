import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectcycleComponent } from './detectcycle.component';

describe('DetectcycleComponent', () => {
  let component: DetectcycleComponent;
  let fixture: ComponentFixture<DetectcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectcycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
