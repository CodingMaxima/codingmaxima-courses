import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagmentComponent } from './state-managment.component';

describe('StateManagmentComponent', () => {
  let component: StateManagmentComponent;
  let fixture: ComponentFixture<StateManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
