import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndornotComponent } from './andornot.component';

describe('AndornotComponent', () => {
  let component: AndornotComponent;
  let fixture: ComponentFixture<AndornotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndornotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndornotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
