import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion1Component } from './loopquestion1.component';

describe('Loopquestion1Component', () => {
  let component: Loopquestion1Component;
  let fixture: ComponentFixture<Loopquestion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
