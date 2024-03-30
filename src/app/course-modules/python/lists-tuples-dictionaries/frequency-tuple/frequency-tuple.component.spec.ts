import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyTupleComponent } from './frequency-tuple.component';

describe('FrequencyTupleComponent', () => {
  let component: FrequencyTupleComponent;
  let fixture: ComponentFixture<FrequencyTupleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencyTupleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequencyTupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
