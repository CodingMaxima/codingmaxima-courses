import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTransformOutputComponent } from './pipes-transform-output.component';

describe('PipesTransformOutputComponent', () => {
  let component: PipesTransformOutputComponent;
  let fixture: ComponentFixture<PipesTransformOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTransformOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTransformOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
