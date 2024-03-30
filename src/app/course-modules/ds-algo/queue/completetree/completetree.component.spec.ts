import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletetreeComponent } from './completetree.component';

describe('CompletetreeComponent', () => {
  let component: CompletetreeComponent;
  let fixture: ComponentFixture<CompletetreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletetreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
