import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorComparableComponent } from './comparator-comparable.component';

describe('ComparatorComparableComponent', () => {
  let component: ComparatorComparableComponent;
  let fixture: ComponentFixture<ComparatorComparableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparatorComparableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorComparableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
