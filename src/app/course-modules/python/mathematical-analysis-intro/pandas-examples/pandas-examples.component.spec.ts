import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandasExamplesComponent } from './pandas-examples.component';

describe('PandasExamplesComponent', () => {
  let component: PandasExamplesComponent;
  let fixture: ComponentFixture<PandasExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandasExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandasExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
