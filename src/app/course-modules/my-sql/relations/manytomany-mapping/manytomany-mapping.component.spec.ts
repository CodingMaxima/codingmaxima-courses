import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManytomanyMappingComponent } from './manytomany-mapping.component';

describe('ManytomanyMappingComponent', () => {
  let component: ManytomanyMappingComponent;
  let fixture: ComponentFixture<ManytomanyMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManytomanyMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManytomanyMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
