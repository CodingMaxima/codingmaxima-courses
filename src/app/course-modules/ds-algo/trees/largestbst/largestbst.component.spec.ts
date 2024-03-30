import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargestbstComponent } from './largestbst.component';

describe('LargestbstComponent', () => {
  let component: LargestbstComponent;
  let fixture: ComponentFixture<LargestbstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargestbstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargestbstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
