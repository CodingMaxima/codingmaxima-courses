import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlockComponent } from './deadlock.component';

describe('DeadlockComponent', () => {
  let component: DeadlockComponent;
  let fixture: ComponentFixture<DeadlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
