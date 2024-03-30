import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmstrongNumberComponent } from './armstrong-number.component';

describe('ArmstrongNumberComponent', () => {
  let component: ArmstrongNumberComponent;
  let fixture: ComponentFixture<ArmstrongNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmstrongNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmstrongNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
