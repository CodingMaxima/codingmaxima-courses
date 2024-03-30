import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityqueueComponent } from './priorityqueue.component';

describe('PriorityqueueComponent', () => {
  let component: PriorityqueueComponent;
  let fixture: ComponentFixture<PriorityqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityqueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
