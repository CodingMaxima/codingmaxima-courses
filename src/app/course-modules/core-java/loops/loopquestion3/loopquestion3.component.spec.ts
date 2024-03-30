import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion3Component } from './loopquestion3.component';

describe('Loopquestion3Component', () => {
  let component: Loopquestion3Component;
  let fixture: ComponentFixture<Loopquestion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
