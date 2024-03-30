import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuetwostackComponent } from './queuetwostack.component';

describe('QueuetwostackComponent', () => {
  let component: QueuetwostackComponent;
  let fixture: ComponentFixture<QueuetwostackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueuetwostackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueuetwostackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
