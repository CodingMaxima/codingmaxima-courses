import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePyKeyOccuranceInArrayComponent } from './free-py-key-occurance-in-array.component';

describe('FreePyKeyOccuranceInArrayComponent', () => {
  let component: FreePyKeyOccuranceInArrayComponent;
  let fixture: ComponentFixture<FreePyKeyOccuranceInArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePyKeyOccuranceInArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePyKeyOccuranceInArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
