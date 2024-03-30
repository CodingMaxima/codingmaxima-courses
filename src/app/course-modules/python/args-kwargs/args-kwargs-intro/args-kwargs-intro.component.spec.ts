import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgsKwargsIntroComponent } from './args-kwargs-intro.component';

describe('ArgsKwargsIntroComponent', () => {
  let component: ArgsKwargsIntroComponent;
  let fixture: ComponentFixture<ArgsKwargsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgsKwargsIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgsKwargsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
