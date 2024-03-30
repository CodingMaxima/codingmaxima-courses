import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointClassComponent } from './point-class.component';

describe('PointClassComponent', () => {
  let component: PointClassComponent;
  let fixture: ComponentFixture<PointClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
