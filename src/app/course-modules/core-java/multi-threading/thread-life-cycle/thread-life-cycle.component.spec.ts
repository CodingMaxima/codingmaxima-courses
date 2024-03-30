import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadLifeCycleComponent } from './thread-life-cycle.component';

describe('ThreadLifeCycleComponent', () => {
  let component: ThreadLifeCycleComponent;
  let fixture: ComponentFixture<ThreadLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
