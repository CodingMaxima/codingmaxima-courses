import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHaldlingComponent } from './error-haldling.component';

describe('ErrorHaldlingComponent', () => {
  let component: ErrorHaldlingComponent;
  let fixture: ComponentFixture<ErrorHaldlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHaldlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHaldlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
