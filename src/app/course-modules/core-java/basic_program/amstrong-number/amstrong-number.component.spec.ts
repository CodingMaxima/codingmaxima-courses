import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmstrongNumberComponent } from './amstrong-number.component';

describe('AmstrongNumberComponent', () => {
  let component: AmstrongNumberComponent;
  let fixture: ComponentFixture<AmstrongNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmstrongNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmstrongNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
