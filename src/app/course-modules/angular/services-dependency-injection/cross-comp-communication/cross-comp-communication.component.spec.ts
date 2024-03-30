import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossCompCommunicationComponent } from './cross-comp-communication.component';

describe('CrossCompCommunicationComponent', () => {
  let component: CrossCompCommunicationComponent;
  let fixture: ComponentFixture<CrossCompCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossCompCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossCompCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
