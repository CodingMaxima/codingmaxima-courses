import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeExceptionsComponent } from './free-exceptions.component';

describe('FreeExceptionsComponent', () => {
  let component: FreeExceptionsComponent;
  let fixture: ComponentFixture<FreeExceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeExceptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
