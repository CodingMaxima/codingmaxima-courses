import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimorphicNumberComponent } from './trimorphic-number.component';

describe('TrimorphicNumberComponent', () => {
  let component: TrimorphicNumberComponent;
  let fixture: ComponentFixture<TrimorphicNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimorphicNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimorphicNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
