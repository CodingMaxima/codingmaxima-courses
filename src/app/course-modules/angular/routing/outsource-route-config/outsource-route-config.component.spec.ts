import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourceRouteConfigComponent } from './outsource-route-config.component';

describe('OutsourceRouteConfigComponent', () => {
  let component: OutsourceRouteConfigComponent;
  let fixture: ComponentFixture<OutsourceRouteConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsourceRouteConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsourceRouteConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
