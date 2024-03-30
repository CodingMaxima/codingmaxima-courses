import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsIntroComponent } from './oops-intro.component';

describe('OopsIntroComponent', () => {
  let component: OopsIntroComponent;
  let fixture: ComponentFixture<OopsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OopsIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OopsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
