import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckforbstComponent } from './checkforbst.component';

describe('CheckforbstComponent', () => {
  let component: CheckforbstComponent;
  let fixture: ComponentFixture<CheckforbstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckforbstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckforbstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
