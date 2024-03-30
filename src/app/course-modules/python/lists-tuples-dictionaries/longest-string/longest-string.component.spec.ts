import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestStringComponent } from './longest-string.component';

describe('LongestStringComponent', () => {
  let component: LongestStringComponent;
  let fixture: ComponentFixture<LongestStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongestStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongestStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
