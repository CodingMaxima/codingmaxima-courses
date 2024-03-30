import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatingProgramComponent } from './navigating-program.component';

describe('NavigatingProgramComponent', () => {
  let component: NavigatingProgramComponent;
  let fixture: ComponentFixture<NavigatingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatingProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
