import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePyNumberOccuranceComponent } from './free-py-number-occurance.component';

describe('FreePyNumberOccuranceComponent', () => {
  let component: FreePyNumberOccuranceComponent;
  let fixture: ComponentFixture<FreePyNumberOccuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePyNumberOccuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePyNumberOccuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
