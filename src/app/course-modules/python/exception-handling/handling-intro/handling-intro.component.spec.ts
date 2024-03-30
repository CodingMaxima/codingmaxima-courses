import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingIntroComponent } from './handling-intro.component';

describe('HandlingIntroComponent', () => {
  let component: HandlingIntroComponent;
  let fixture: ComponentFixture<HandlingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
