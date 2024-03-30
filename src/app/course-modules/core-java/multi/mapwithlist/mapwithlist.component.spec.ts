import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapwithlistComponent } from './mapwithlist.component';

describe('MapwithlistComponent', () => {
  let component: MapwithlistComponent;
  let fixture: ComponentFixture<MapwithlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapwithlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapwithlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
