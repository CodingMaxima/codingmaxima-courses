import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleHooksComponent } from './component-lifecycle-hooks.component';

describe('ComponentLifecycleHooksComponent', () => {
  let component: ComponentLifecycleHooksComponent;
  let fixture: ComponentFixture<ComponentLifecycleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLifecycleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
