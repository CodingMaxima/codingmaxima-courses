import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion7Component } from './loopquestion7.component';

describe('Loopquestion7Component', () => {
  let component: Loopquestion7Component;
  let fixture: ComponentFixture<Loopquestion7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
