import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion6Component } from './loopquestion6.component';

describe('Loopquestion6Component', () => {
  let component: Loopquestion6Component;
  let fixture: ComponentFixture<Loopquestion6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
