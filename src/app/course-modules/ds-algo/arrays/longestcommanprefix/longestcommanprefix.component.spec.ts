import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestcommanprefixComponent } from './longestcommanprefix.component';

describe('LongestcommanprefixComponent', () => {
  let component: LongestcommanprefixComponent;
  let fixture: ComponentFixture<LongestcommanprefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongestcommanprefixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongestcommanprefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
