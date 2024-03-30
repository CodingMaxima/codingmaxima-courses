import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderCompComponent } from './higher-order-comp.component';

describe('HigherOrderCompComponent', () => {
  let component: HigherOrderCompComponent;
  let fixture: ComponentFixture<HigherOrderCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherOrderCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
