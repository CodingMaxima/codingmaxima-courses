import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevnumbermethodComponent } from './revnumbermethod.component';

describe('RevnumbermethodComponent', () => {
  let component: RevnumbermethodComponent;
  let fixture: ComponentFixture<RevnumbermethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevnumbermethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevnumbermethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
