import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingRequestsComponent } from './sending-requests.component';

describe('SendingRequestsComponent', () => {
  let component: SendingRequestsComponent;
  let fixture: ComponentFixture<SendingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
