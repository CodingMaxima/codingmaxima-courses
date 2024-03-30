import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiValuesComponent } from './ascii-values.component';

describe('AsciiValuesComponent', () => {
  let component: AsciiValuesComponent;
  let fixture: ComponentFixture<AsciiValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsciiValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
