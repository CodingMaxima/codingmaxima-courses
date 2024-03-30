import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpyExamplesComponent } from './numpy-examples.component';

describe('NumpyExamplesComponent', () => {
  let component: NumpyExamplesComponent;
  let fixture: ComponentFixture<NumpyExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumpyExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumpyExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
