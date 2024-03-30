import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperarrayComponent } from './superarray.component';

describe('SuperarrayComponent', () => {
  let component: SuperarrayComponent;
  let fixture: ComponentFixture<SuperarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
