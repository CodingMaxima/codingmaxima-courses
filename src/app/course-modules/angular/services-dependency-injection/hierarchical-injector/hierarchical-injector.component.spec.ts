import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalInjectorComponent } from './hierarchical-injector.component';

describe('HierarchicalInjectorComponent', () => {
  let component: HierarchicalInjectorComponent;
  let fixture: ComponentFixture<HierarchicalInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchicalInjectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicalInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
