import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchRouteParameterComponent } from './fetch-route-parameter.component';

describe('FetchRouteParameterComponent', () => {
  let component: FetchRouteParameterComponent;
  let fixture: ComponentFixture<FetchRouteParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchRouteParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchRouteParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
