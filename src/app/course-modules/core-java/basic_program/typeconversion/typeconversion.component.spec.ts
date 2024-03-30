import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeconversionComponent } from './typeconversion.component';

describe('TypeconversionComponent', () => {
  let component: TypeconversionComponent;
  let fixture: ComponentFixture<TypeconversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeconversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
