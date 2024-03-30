import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePySmallerNumberComponent } from './free-py-smaller-number.component';

describe('FreePySmallerNumberComponent', () => {
  let component: FreePySmallerNumberComponent;
  let fixture: ComponentFixture<FreePySmallerNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePySmallerNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreePySmallerNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
