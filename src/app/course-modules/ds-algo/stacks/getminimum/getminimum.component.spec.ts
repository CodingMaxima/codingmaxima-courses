import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetminimumComponent } from './getminimum.component';

describe('GetminimumComponent', () => {
  let component: GetminimumComponent;
  let fixture: ComponentFixture<GetminimumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetminimumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetminimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
