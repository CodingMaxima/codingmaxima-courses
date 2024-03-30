import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterComponentsComponent } from './router-components.component';

describe('RouterComponentsComponent', () => {
  let component: RouterComponentsComponent;
  let fixture: ComponentFixture<RouterComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
