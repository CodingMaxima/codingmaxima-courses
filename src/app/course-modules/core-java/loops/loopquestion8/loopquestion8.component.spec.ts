import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion8Component } from './loopquestion8.component';

describe('Loopquestion8Component', () => {
  let component: Loopquestion8Component;
  let fixture: ComponentFixture<Loopquestion8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
