import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderErrorHandlingComponent } from './header-error-handling.component';

describe('HeaderErrorHandlingComponent', () => {
  let component: HeaderErrorHandlingComponent;
  let fixture: ComponentFixture<HeaderErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderErrorHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
