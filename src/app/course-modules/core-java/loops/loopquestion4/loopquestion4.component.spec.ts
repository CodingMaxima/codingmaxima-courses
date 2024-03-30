import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion4Component } from './loopquestion4.component';

describe('Loopquestion4Component', () => {
  let component: Loopquestion4Component;
  let fixture: ComponentFixture<Loopquestion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
