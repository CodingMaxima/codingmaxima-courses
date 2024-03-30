import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxrectangleComponent } from './maxrectangle.component';

describe('MaxrectangleComponent', () => {
  let component: MaxrectangleComponent;
  let fixture: ComponentFixture<MaxrectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxrectangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxrectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
