import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindletterComponent } from './findletter.component';

describe('FindletterComponent', () => {
  let component: FindletterComponent;
  let fixture: ComponentFixture<FindletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
