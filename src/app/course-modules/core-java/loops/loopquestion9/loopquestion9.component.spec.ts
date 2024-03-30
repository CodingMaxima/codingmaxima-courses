import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion9Component } from './loopquestion9.component';

describe('Loopquestion9Component', () => {
  let component: Loopquestion9Component;
  let fixture: ComponentFixture<Loopquestion9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
