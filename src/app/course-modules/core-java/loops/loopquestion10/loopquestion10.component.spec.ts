import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopquestion10Component } from './loopquestion10.component';

describe('Loopquestion10Component', () => {
  let component: Loopquestion10Component;
  let fixture: ComponentFixture<Loopquestion10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loopquestion10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopquestion10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
