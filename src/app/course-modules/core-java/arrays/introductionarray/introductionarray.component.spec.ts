import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionarrayComponent } from './introductionarray.component';

describe('IntroductionarrayComponent', () => {
  let component: IntroductionarrayComponent;
  let fixture: ComponentFixture<IntroductionarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
