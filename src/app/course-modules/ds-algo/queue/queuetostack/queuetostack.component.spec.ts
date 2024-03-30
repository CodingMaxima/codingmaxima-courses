import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuetostackComponent } from './queuetostack.component';

describe('QueuetostackComponent', () => {
  let component: QueuetostackComponent;
  let fixture: ComponentFixture<QueuetostackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueuetostackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueuetostackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
