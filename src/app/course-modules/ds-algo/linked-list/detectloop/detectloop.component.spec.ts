import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectloopComponent } from './detectloop.component';

describe('DetectloopComponent', () => {
  let component: DetectloopComponent;
  let fixture: ComponentFixture<DetectloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectloopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
