import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionIntroComponent } from './function-intro.component';

describe('FunctionIntroComponent', () => {
  let component: FunctionIntroComponent;
  let fixture: ComponentFixture<FunctionIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
