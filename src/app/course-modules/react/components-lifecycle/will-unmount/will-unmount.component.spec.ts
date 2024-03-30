import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillUnmountComponent } from './will-unmount.component';

describe('WillUnmountComponent', () => {
  let component: WillUnmountComponent;
  let fixture: ComponentFixture<WillUnmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillUnmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillUnmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
