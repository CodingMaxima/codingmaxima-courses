import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeEvenOrOddComponent } from './free-even-or-odd.component';

describe('FreeEvenOrOddComponent', () => {
  let component: FreeEvenOrOddComponent;
  let fixture: ComponentFixture<FreeEvenOrOddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeEvenOrOddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeEvenOrOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
