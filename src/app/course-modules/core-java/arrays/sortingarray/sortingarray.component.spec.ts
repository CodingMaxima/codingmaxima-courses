import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingarrayComponent } from './sortingarray.component';

describe('SortingarrayComponent', () => {
  let component: SortingarrayComponent;
  let fixture: ComponentFixture<SortingarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
