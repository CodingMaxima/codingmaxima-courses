import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iplmatch2Component } from './iplmatch2.component';

describe('Iplmatch2Component', () => {
  let component: Iplmatch2Component;
  let fixture: ComponentFixture<Iplmatch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iplmatch2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iplmatch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
