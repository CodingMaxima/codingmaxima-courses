import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetomanyMappingComponent } from './onetomany-mapping.component';

describe('OnetomanyMappingComponent', () => {
  let component: OnetomanyMappingComponent;
  let fixture: ComponentFixture<OnetomanyMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnetomanyMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetomanyMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
