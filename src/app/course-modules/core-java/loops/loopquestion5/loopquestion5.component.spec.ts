import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion5Component } from './loopquestion5.component';

describe('Loopquestion5Component', () => {
  let component: Loopquestion5Component;
  let fixture: ComponentFixture<Loopquestion5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
