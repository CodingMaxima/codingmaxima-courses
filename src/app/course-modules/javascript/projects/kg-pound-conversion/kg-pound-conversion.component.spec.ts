import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KgPoundConversionComponent } from './kg-pound-conversion.component';

describe('KgPoundConversionComponent', () => {
  let component: KgPoundConversionComponent;
  let fixture: ComponentFixture<KgPoundConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KgPoundConversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KgPoundConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
