import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleelementComponent } from './middleelement.component';

describe('MiddleelementComponent', () => {
  let component: MiddleelementComponent;
  let fixture: ComponentFixture<MiddleelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
