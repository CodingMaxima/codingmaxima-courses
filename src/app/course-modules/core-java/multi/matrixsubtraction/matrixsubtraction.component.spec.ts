import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixsubtractionComponent } from './matrixsubtraction.component';

describe('MatrixsubtractionComponent', () => {
  let component: MatrixsubtractionComponent;
  let fixture: ComponentFixture<MatrixsubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixsubtractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixsubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
