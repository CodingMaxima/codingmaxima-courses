import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPairsComponent } from './count-pairs.component';

describe('CountPairsComponent', () => {
  let component: CountPairsComponent;
  let fixture: ComponentFixture<CountPairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountPairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
