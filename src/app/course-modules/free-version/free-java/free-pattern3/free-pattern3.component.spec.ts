import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreePattern3Component } from './free-pattern3.component';

describe('FreePattern3Component', () => {
  let component: FreePattern3Component;
  let fixture: ComponentFixture<FreePattern3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreePattern3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreePattern3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
