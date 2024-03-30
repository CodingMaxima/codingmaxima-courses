import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMethodWorkingComponent } from './free-method-working.component';

describe('FreeMethodWorkingComponent', () => {
  let component: FreeMethodWorkingComponent;
  let fixture: ComponentFixture<FreeMethodWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeMethodWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeMethodWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
