import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffwaysInjServicesComponent } from './diffways-inj-services.component';

describe('DiffwaysInjServicesComponent', () => {
  let component: DiffwaysInjServicesComponent;
  let fixture: ComponentFixture<DiffwaysInjServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffwaysInjServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffwaysInjServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
