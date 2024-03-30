import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenclosedComponent } from './openclosed.component';

describe('OpenclosedComponent', () => {
  let component: OpenclosedComponent;
  let fixture: ComponentFixture<OpenclosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenclosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenclosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
