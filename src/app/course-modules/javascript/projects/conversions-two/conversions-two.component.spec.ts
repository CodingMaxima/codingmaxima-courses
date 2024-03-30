import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionsTwoComponent } from './conversions-two.component';

describe('ConversionsTwoComponent', () => {
  let component: ConversionsTwoComponent;
  let fixture: ComponentFixture<ConversionsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
