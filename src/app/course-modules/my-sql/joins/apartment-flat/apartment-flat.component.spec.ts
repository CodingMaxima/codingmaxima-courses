import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentFlatComponent } from './apartment-flat.component';

describe('ApartmentFlatComponent', () => {
  let component: ApartmentFlatComponent;
  let fixture: ComponentFixture<ApartmentFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
