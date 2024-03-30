import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseMiddlewareComponent } from './use-middleware.component';

describe('UseMiddlewareComponent', () => {
  let component: UseMiddlewareComponent;
  let fixture: ComponentFixture<UseMiddlewareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseMiddlewareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMiddlewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
