import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlinksNavigationComponent } from './routerlinks-navigation.component';

describe('RouterlinksNavigationComponent', () => {
  let component: RouterlinksNavigationComponent;
  let fixture: ComponentFixture<RouterlinksNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterlinksNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterlinksNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
