import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongeststringComponent } from './longeststring.component';

describe('LongeststringComponent', () => {
  let component: LongeststringComponent;
  let fixture: ComponentFixture<LongeststringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongeststringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongeststringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
