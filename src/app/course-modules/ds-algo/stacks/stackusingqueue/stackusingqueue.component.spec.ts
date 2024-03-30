import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackusingqueueComponent } from './stackusingqueue.component';

describe('StackusingqueueComponent', () => {
  let component: StackusingqueueComponent;
  let fixture: ComponentFixture<StackusingqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackusingqueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackusingqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
