import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictcityComponent } from './districtcity.component';

describe('DistrictcityComponent', () => {
  let component: DistrictcityComponent;
  let fixture: ComponentFixture<DistrictcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
