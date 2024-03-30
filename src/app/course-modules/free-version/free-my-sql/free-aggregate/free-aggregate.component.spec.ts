import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAggregateComponent } from './free-aggregate.component';

describe('FreeAggregateComponent', () => {
  let component: FreeAggregateComponent;
  let fixture: ComponentFixture<FreeAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeAggregateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
