import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringAcuatorComponent } from './spring-acuator.component';

describe('SpringAcuatorComponent', () => {
  let component: SpringAcuatorComponent;
  let fixture: ComponentFixture<SpringAcuatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringAcuatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringAcuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
