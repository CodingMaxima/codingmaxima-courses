import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingNumberComponent } from './guessing-number.component';

describe('GuessingNumberComponent', () => {
  let component: GuessingNumberComponent;
  let fixture: ComponentFixture<GuessingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessingNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
