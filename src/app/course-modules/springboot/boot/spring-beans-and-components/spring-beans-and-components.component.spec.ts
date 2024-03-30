import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBeansAndComponentsComponent } from './spring-beans-and-components.component';

describe('SpringBeansAndComponentsComponent', () => {
  let component: SpringBeansAndComponentsComponent;
  let fixture: ComponentFixture<SpringBeansAndComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringBeansAndComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringBeansAndComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
