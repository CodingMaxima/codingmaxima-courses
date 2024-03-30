import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateIntroComponent } from './aggregate-intro.component';

describe('AggregateIntroComponent', () => {
  let component: AggregateIntroComponent;
  let fixture: ComponentFixture<AggregateIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
