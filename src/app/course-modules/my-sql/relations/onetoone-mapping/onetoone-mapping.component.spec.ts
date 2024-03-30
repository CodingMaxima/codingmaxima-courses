import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetooneMappingComponent } from './onetoone-mapping.component';

describe('OnetooneMappingComponent', () => {
  let component: OnetooneMappingComponent;
  let fixture: ComponentFixture<OnetooneMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnetooneMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetooneMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
