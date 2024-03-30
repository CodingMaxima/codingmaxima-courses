import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnyNumberComponent } from './sunny-number.component';

describe('SunnyNumberComponent', () => {
  let component: SunnyNumberComponent;
  let fixture: ComponentFixture<SunnyNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunnyNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
