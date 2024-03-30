import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsIntroComponent } from './decorators-intro.component';

describe('DecoratorsIntroComponent', () => {
  let component: DecoratorsIntroComponent;
  let fixture: ComponentFixture<DecoratorsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorsIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
