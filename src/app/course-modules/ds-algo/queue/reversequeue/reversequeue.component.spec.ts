import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversequeueComponent } from './reversequeue.component';

describe('ReversequeueComponent', () => {
  let component: ReversequeueComponent;
  let fixture: ComponentFixture<ReversequeueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversequeueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversequeueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
