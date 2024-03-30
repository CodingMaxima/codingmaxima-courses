import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductarrarpuzzleComponent } from './productarrarpuzzle.component';

describe('ProductarrarpuzzleComponent', () => {
  let component: ProductarrarpuzzleComponent;
  let fixture: ComponentFixture<ProductarrarpuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductarrarpuzzleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductarrarpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
