import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterNumberComponent } from './greater-number.component';

describe('GreaterNumberComponent', () => {
  let component: GreaterNumberComponent;
  let fixture: ComponentFixture<GreaterNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreaterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
