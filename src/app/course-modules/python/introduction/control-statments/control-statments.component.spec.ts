import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatmentsComponent } from './control-statments.component';

describe('ControlStatmentsComponent', () => {
  let component: ControlStatmentsComponent;
  let fixture: ComponentFixture<ControlStatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlStatmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlStatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
