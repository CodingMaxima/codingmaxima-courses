import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionoftwoarrayComponent } from './intersectionoftwoarray.component';

describe('IntersectionoftwoarrayComponent', () => {
  let component: IntersectionoftwoarrayComponent;
  let fixture: ComponentFixture<IntersectionoftwoarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersectionoftwoarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntersectionoftwoarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
