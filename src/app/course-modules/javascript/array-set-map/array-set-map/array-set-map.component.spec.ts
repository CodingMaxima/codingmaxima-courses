import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySetMapComponent } from './array-set-map.component';

describe('ArraySetMapComponent', () => {
  let component: ArraySetMapComponent;
  let fixture: ComponentFixture<ArraySetMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraySetMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraySetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
