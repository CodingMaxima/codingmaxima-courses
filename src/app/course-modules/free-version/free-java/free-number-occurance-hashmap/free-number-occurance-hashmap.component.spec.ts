import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeNumberOccuranceHashmapComponent } from './free-number-occurance-hashmap.component';

describe('FreeNumberOccuranceHashmapComponent', () => {
  let component: FreeNumberOccuranceHashmapComponent;
  let fixture: ComponentFixture<FreeNumberOccuranceHashmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeNumberOccuranceHashmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeNumberOccuranceHashmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
