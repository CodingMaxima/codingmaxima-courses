import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pattren15Component } from './pattren15.component';

describe('Pattren15Component', () => {
  let component: Pattren15Component;
  let fixture: ComponentFixture<Pattren15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pattren15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pattren15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
