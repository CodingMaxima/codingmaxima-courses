import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibinocciSeriesComponent } from './fibinocci-series.component';

describe('FibinocciSeriesComponent', () => {
  let component: FibinocciSeriesComponent;
  let fixture: ComponentFixture<FibinocciSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibinocciSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibinocciSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
