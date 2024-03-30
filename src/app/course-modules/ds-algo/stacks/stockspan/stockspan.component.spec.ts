import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockspanComponent } from './stockspan.component';

describe('StockspanComponent', () => {
  let component: StockspanComponent;
  let fixture: ComponentFixture<StockspanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockspanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
