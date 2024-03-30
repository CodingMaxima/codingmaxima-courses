import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeReverseNumberComponent } from './free-reverse-number.component';

describe('FreeReverseNumberComponent', () => {
  let component: FreeReverseNumberComponent;
  let fixture: ComponentFixture<FreeReverseNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeReverseNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeReverseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
