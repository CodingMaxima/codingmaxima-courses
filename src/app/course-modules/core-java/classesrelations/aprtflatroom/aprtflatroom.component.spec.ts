import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprtflatroomComponent } from './aprtflatroom.component';

describe('AprtflatroomComponent', () => {
  let component: AprtflatroomComponent;
  let fixture: ComponentFixture<AprtflatroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprtflatroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprtflatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
