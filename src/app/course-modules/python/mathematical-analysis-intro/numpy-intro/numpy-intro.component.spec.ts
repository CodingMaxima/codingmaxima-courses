import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpyIntroComponent } from './numpy-intro.component';

describe('NumpyIntroComponent', () => {
  let component: NumpyIntroComponent;
  let fixture: ComponentFixture<NumpyIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumpyIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumpyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
