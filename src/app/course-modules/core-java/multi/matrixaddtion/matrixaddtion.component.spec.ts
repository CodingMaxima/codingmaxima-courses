import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixaddtionComponent } from './matrixaddtion.component';

describe('MatrixaddtionComponent', () => {
  let component: MatrixaddtionComponent;
  let fixture: ComponentFixture<MatrixaddtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixaddtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixaddtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
