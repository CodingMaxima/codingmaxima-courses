import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingEventsComponent } from './handling-events.component';

describe('HandlingEventsComponent', () => {
  let component: HandlingEventsComponent;
  let fixture: ComponentFixture<HandlingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});