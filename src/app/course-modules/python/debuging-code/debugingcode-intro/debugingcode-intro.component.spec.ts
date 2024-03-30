import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugingcodeIntroComponent } from './debugingcode-intro.component';

describe('DebugingcodeIntroComponent', () => {
  let component: DebugingcodeIntroComponent;
  let fixture: ComponentFixture<DebugingcodeIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugingcodeIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugingcodeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
