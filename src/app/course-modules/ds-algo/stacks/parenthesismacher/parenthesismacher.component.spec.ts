import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenthesismacherComponent } from './parenthesismacher.component';

describe('ParenthesismacherComponent', () => {
  let component: ParenthesismacherComponent;
  let fixture: ComponentFixture<ParenthesismacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenthesismacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenthesismacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
