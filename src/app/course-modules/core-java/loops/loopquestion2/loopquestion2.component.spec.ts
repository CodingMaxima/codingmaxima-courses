import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion2Component } from './loopquestion2.component';

describe('Loopquestion2Component', () => {
  let component: Loopquestion2Component;
  let fixture: ComponentFixture<Loopquestion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
