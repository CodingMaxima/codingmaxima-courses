import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixmultiplicationComponent } from './matrixmultiplication.component';

describe('MatrixmultiplicationComponent', () => {
  let component: MatrixmultiplicationComponent;
  let fixture: ComponentFixture<MatrixmultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixmultiplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixmultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
