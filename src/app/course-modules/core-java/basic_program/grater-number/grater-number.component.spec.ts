import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraterNumberComponent } from './grater-number.component';

describe('GraterNumberComponent', () => {
  let component: GraterNumberComponent;
  let fixture: ComponentFixture<GraterNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraterNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
