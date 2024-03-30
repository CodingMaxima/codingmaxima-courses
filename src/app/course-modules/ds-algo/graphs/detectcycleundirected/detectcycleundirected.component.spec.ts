import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectcycleundirectedComponent } from './detectcycleundirected.component';

describe('DetectcycleundirectedComponent', () => {
  let component: DetectcycleundirectedComponent;
  let fixture: ComponentFixture<DetectcycleundirectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectcycleundirectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectcycleundirectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
