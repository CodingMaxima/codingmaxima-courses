import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeJsEvenOrOddComponent } from './free-js-even-or-odd.component';

describe('FreeJsEvenOrOddComponent', () => {
  let component: FreeJsEvenOrOddComponent;
  let fixture: ComponentFixture<FreeJsEvenOrOddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeJsEvenOrOddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeJsEvenOrOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
