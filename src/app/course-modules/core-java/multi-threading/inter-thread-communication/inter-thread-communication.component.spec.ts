import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterThreadCommunicationComponent } from './inter-thread-communication.component';

describe('InterThreadCommunicationComponent', () => {
  let component: InterThreadCommunicationComponent;
  let fixture: ComponentFixture<InterThreadCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterThreadCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterThreadCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
